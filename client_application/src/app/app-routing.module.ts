import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './helpers/canActivateAuthGuard';

import { LoginComponent } from './components/login/login.component';

import { LogoutComponent } from './components/login/logout.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReviewBookingComponent } from './components/review-booking/review-booking.component';
import { PaymentScreenComponent } from './components/payment-screen/payment-screen.component';
import { ViewAllRoomsComponent } from './components/view-all-rooms/view-all-rooms.component';
import { PaymentMobileComponent } from './components/payment-mobile/payment-mobile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-all-rooms', component: ViewAllRoomsComponent},
  { path: 'review-booking', component: ReviewBookingComponent },
  { path: 'pay', component: PaymentScreenComponent },
  { path: 'pay-mob', component: PaymentMobileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
