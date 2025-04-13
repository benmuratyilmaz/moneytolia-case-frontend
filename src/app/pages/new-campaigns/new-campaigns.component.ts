import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CampaignsFormComponent } from '../../components/campaigns-form/campaigns-form.component';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-campaigns',
  standalone: true,
  imports: [NavComponent, HeaderComponent, CampaignsFormComponent, FontAwesomeModule],
  templateUrl: './new-campaigns.component.html',
  styleUrl: './new-campaigns.component.scss'
})
export class NewCampaignsComponent {
  breadCrumb: IconDefinition = faChevronRight;

}
