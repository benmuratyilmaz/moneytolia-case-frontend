import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginBannerComponent } from '../../components/login-banner/login-banner.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [LoginFormComponent, LoginBannerComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

}
