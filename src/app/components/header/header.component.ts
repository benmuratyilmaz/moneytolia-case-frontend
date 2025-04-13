import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavComponent } from '../nav/nav.component';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCircleUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, NavComponent, FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: IconDefinition = faCircleUser;
  mobileMenuBtn: IconDefinition = faBars;
  mobileMenuBtnClose: IconDefinition = faXmark;
  showMobileMenu: boolean = false;
  userName: string = "";


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.userName = localStorage.getItem("isLogginName") || "";
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  mobileMenuOpen() {
    this.showMobileMenu = true;
  }

  mobileMenuClose() {
    this.showMobileMenu = false;
  }

}
