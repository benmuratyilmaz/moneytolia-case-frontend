import { Component } from '@angular/core';
import { LoginBannerComponent } from '../../components/login-banner/login-banner.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginBannerComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
