import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, CommonModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() loginType: string = "login";
  isEmail: boolean = true;
  isPassword: boolean = true;
  isPasswordRepat: boolean = false;
  isForgetPasswordButton: boolean = true;
  isSignUpButton: boolean = true;
  isSubmitButtonLabel: string = "Giriş Yap";
  isFormTitle: string = "Giriş Yap";
  url: string = "/campaigns";

  ngOnInit() {
    this.loginProp();
  }

  loginProp(): void {
    switch (this.loginType) {
      case "sign-up":
        this.url = "/login";
        this.isSignUpButton = false;
        this.isPasswordRepat = true;
        this.isSubmitButtonLabel = "Üye Ol"
        this.isFormTitle = "Üye Ol";
        this.isForgetPasswordButton = false;
        break;
      case "forget-password":
        this.url = "/login";
        this.isSubmitButtonLabel = "Email Gönder";
        this.isPassword = false;
        this.isFormTitle = "Şifremi Unuttum";
        this.isForgetPasswordButton = false;
        break;

    }
  }
}
