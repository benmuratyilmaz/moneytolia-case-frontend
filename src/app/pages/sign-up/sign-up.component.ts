import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginBannerComponent } from '../../components/login-banner/login-banner.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [LoginFormComponent, LoginBannerComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
