import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [NavComponent,HeaderComponent],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {

}
