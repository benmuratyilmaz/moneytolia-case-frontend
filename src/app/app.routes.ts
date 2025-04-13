import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { NewCampaignsComponent } from './pages/new-campaigns/new-campaigns.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "sign-up", component: SignUpComponent },
    { path: "forget-password", component: ForgetPasswordComponent },
    { path: "campaigns", component: CampaignsComponent },
    { path: "new-campaign", component: NewCampaignsComponent },
    { path: "", redirectTo: "login", pathMatch: "full" },
];
