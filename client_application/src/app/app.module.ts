import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';

// import alert service and component
import { AlertService } from './services/alert-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HeadComponent } from './layout/head/head.component';
import { LogoutComponent } from './components/login/logout.component';
import { Helpers } from './helpers/helpers';
import { UserService } from './services/user.service';
import { BaseService } from './services/base.service';
import { TokenService } from './services/token.service';
import { AppConfig } from './config/config';
import { AuthGuard } from './helpers/canActivateAuthGuard';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopfeedbacksComponent } from './components/about/topfeedbacks/topfeedbacks.component';
import { ContactsComponent } from './components/about/contacts/contacts.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { NavFeaturesComponent } from './components/nav-features/nav-features.component';
import { RoomTypeComponent } from './components/room-type/room-type.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { LocationComponent } from './components/location/location.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReviewBookingComponent } from './components/review-booking/review-booking.component';
import { TravelerIfoComponent } from './components/traveler-ifo/traveler-ifo.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ConsentComponent } from './components/consent/consent.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentScreenComponent } from './components/payment-screen/payment-screen.component';
import { BookingSummaryComponent } from './components/booking-summary/booking-summary.component';
import { ViewAllRoomsComponent } from './components/view-all-rooms/view-all-rooms.component';
import { PaymentMobileComponent } from './components/payment-mobile/payment-mobile.component';
import { PaymentBarComponent } from './components/payment-bar/payment-bar.component';
import { AlertComponentComponent } from './components/alert-component/alert-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeadComponent,
    LogoutComponent,
    FooterComponent,
    AboutComponent,
    SignupComponent,
    ProfileComponent,
    TopfeedbacksComponent,
    ContactsComponent,
    MainWrapperComponent,
    NavFeaturesComponent,
    RoomTypeComponent,
    FacilitiesComponent,
    LocationComponent,
    PoliciesComponent,
    UserReviewComponent,
    PaginationComponent,
    LoaderComponent,
    FeedbackComponent,
    PaymentComponent,
    ReviewBookingComponent,
    TravelerIfoComponent,
    CouponsComponent,
    ConsentComponent,
    PaymentOptionsComponent,
    NavHeaderComponent,
    BookingComponent,
    PaymentScreenComponent,
    BookingSummaryComponent,
    ViewAllRoomsComponent,
    PaymentMobileComponent,
    PaymentBarComponent,

    // include alert directive component in app module declarations
    AlertComponentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlideshowModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatInputModule,MatNativeDateModule
    ],

  providers: [AppConfig,AuthGuard,Helpers,BaseService,TokenService,UserService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
