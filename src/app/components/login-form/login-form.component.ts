import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, CommonModule, RouterModule,
    ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() loginType: string = "login";
  loginForm!: FormGroup;
  loginError: boolean = false;
  loginValidError: boolean = false;
  isEmail: boolean = true;
  isPassword: boolean = true;
  isPasswordRepat: boolean = false;
  isForgetPasswordButton: boolean = true;
  isSignUpButton: boolean = true;
  isSubmitButtonLabel: string = "Giriş Yap";
  isFormTitle: string = "Giriş Yap";
  url: string = "/campaigns";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginProp();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
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

  onSubmit() {
    const { email, password } = this.loginForm.value;
    const isValid = this.authService.login(email, password);

    if (email && password) {
      if (isValid) {
        this.router.navigate(['/campaigns']);
      } else {
        this.loginError = true;
        this.loginValidError = false;
      }
    } else {
      this.loginValidError = true;
      this.loginError = false;
    }
  }
}
