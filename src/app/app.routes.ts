import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { NewCampaignsComponent } from './pages/new-campaigns/new-campaigns.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
    { path: 'not-found', component: NotFoundComponent },

    { path: 'campaigns', component: CampaignsComponent, canActivate: [AuthGuard] },
    { path: 'new-campaign', component: NewCampaignsComponent, canActivate: [AuthGuard] },

    { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
];