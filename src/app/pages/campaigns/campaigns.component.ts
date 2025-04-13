import { Component, Input } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faClose, faPenToSquare, faTrash, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Campaign } from '../../models';
import { CommonModule } from '@angular/common';
import { CampaignsFormComponent } from '../../components/campaigns-form/campaigns-form.component';


@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [NavComponent, HeaderComponent, FontAwesomeModule, CommonModule, CampaignsFormComponent],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {
  iconUpdate: IconDefinition = faPenToSquare;
  iconDelete: IconDefinition = faTrash;
  closeModal: IconDefinition = faClose;
  breadCrumb: IconDefinition = faChevronRight;
  showEditModal: boolean = false;
  selectedCampaignId?: string;
  campaigns: Campaign[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.allCampaign();
    }
  }

  allCampaign() {
    const stored = localStorage.getItem("campaigns");
    this.campaigns = stored ? JSON.parse(stored) : [];
  }

  onDelete(id: string) {
    this.campaigns = this.campaigns.filter(c => c.id !== id);
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }

  increasePoint(id: string) {
    const index = this.campaigns.findIndex(c => c.id === id);
    if (index !== -1) {
      this.campaigns[index].points += 1;
      this.updateLocalStorage();
    }
  }

  decreasePoint(id: string) {
    const index = this.campaigns.findIndex(c => c.id === id);
    if (index !== -1 && this.campaigns[index].points > 1) {
      this.campaigns[index].points -= 1;
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }

  openEditModal(id: string) {
    this.showEditModal = true
    this.selectedCampaignId = id;
  }

  modalFormClose(): void {
    this.showEditModal = false;
    this.allCampaign();
  }



}
