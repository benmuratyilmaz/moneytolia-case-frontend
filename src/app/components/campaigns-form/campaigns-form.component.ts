import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Campaign } from "../../models";
import { v4 as uuidv4 } from 'uuid'; // benzersiz id için


@Component({
  selector: 'app-campaigns-form',
  standalone: true,
  imports: [InputComponent, TextareaComponent, ButtonComponent,
    CommonModule,
    ReactiveFormsModule

  ],
  templateUrl: './campaigns-form.component.html',
  styleUrl: './campaigns-form.component.scss'
})
export class CampaignsFormComponent {
  @Input() btnLabel: string = "Kampanya Ekle";
  @Input() isPoint: boolean = true;
  @Input() selectdId?: string;
  @Output() formSubmitted = new EventEmitter<void>();
  campaignForm: FormGroup;
  showModal: boolean = false;

  constructor(private fb: FormBuilder) {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      points: [0, [Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    if (this.selectdId) {
      const storedCampaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
      const campaign: Campaign = storedCampaigns.find((c: Campaign) => c.id === this.selectdId);
      if (campaign) {
        this.campaignForm.patchValue({
          title: campaign.title,
          description: campaign.description
        })
      }
    }
  }

  decreasePoint() {
    const current = this.campaignForm.get('points')?.value || 0;
    if (current > 1) {
      this.campaignForm.get('points')?.setValue(current - 1);
    }
  }

  increasePoint() {
    const current = this.campaignForm.get('points')?.value || 0;
    this.campaignForm.get('points')?.setValue(current + 1);
  }

  onSubmit() {
    if (this.campaignForm.invalid) {
      this.campaignForm.markAllAsTouched();
      return;
    }

    const stored = localStorage.getItem('campaigns');
    let campaigns = stored ? JSON.parse(stored) : [];

    if (this.selectdId) {
      campaigns = campaigns.map((c: Campaign) =>
        c.id === this.selectdId
          ? { ...c, ...this.campaignForm.value }
          : c
      );
    } else {
      campaigns.push({
        ...this.campaignForm.value,
        id: this.generateId(),
        createdAt: new Date()
      });
    }

    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    this.campaignForm.reset({ points: 0 });

    this.formSubmitted.emit();

    this.showModal = true;
    setTimeout(() => {
      this.showModal = false;
    }, 3000);
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
