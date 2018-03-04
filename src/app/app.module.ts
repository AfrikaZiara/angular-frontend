import { OperatorService } from './operator.service';
import { TourOperatorCategory } from './tour-operator-category.service';
import { TourOperatorAuthGuard } from './tour-operator-auth-guard.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { TourListingFormComponent } from './tour-operator/tour-listing-form/tour-listing-form.component';
import { AdminToursComponent } from './admin/admin-tours/admin-tours.component';
import { LoginComponent } from './login/login.component';
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { TourOperatorListingComponent } from './tour-operator/tour-operator-listing/tour-operator-listing.component';
import { TourOperatorsComponent } from './tour-operators/tour-operators.component';
import { TourOperatorBookingsComponent } from './tour-operator/tour-operator-bookings/tour-operator-bookings.component';
import { AdminTourOperatorsComponent } from './admin/admin-tour-operators/admin-tour-operators.component';
import { AdminTouristsComponent } from './admin/admin-tourists/admin-tourists.component';
import { AdminTourOperatorFormComponent } from './admin/admin-tour-operator-form/admin-tour-operator-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ToursComponent,
    TourDetailsComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    CheckOutComponent,
    TourListingFormComponent,
    AdminToursComponent,
    LoginComponent,
    AdminBookingsComponent,
    TourOperatorListingComponent,
    TourOperatorsComponent,
    TourOperatorBookingsComponent,
    AdminTourOperatorsComponent,
    AdminTouristsComponent,
    AdminTourOperatorFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([

      //Routes for tourist
      { path:'', component: HomeComponent},
      { path:'login', component: LoginComponent},
      { path:'tours', component:ToursComponent },
      { path:'tours/:id', component:TourDetailsComponent },
      { path:'tour-operators', component: TourOperatorsComponent },
      { path:'tour-operators/<int:id>', component: TourOperatorsComponent },

      //protected- must login first
      { path:'shopping-cart', component: ShoppingCartComponent, canActivate:[AuthGuard]  },
      { path:'check-out', component:CheckOutComponent, canActivate:[AuthGuard]  },
      { path:'order-success', component:OrderSuccessComponent, canActivate:[AuthGuard] },

      //Routes for tour operator
      { path:'tour-operator/tours/new', component: TourListingFormComponent, canActivate:[AuthGuard] },
      { path:'tour-operator/tours', component: TourOperatorListingComponent, canActivate:[AuthGuard] },
      { path:'tour-operator/bookings', component:  TourOperatorBookingsComponent, canActivate:[AuthGuard] },

      //Routes for admin
      { path:'admin/tour-operators/new', component: AdminTourOperatorFormComponent, canActivate:[AuthGuard] },
      { path:'admin/tour-operators', component: AdminTourOperatorsComponent, canActivate:[AuthGuard] },
      { path:'admin/tour-operators/:id', component: AdminTourOperatorsComponent, canActivate:[AuthGuard] },

      { path:'admin/tours/new', component: AdminToursComponent, canActivate:[AuthGuard] },
      { path:'admin/tours', component: AdminToursComponent, canActivate:[AuthGuard] }, 
      { path:'admin/tours/:id', component: AdminToursComponent, canActivate:[AuthGuard] },

      { path:'admin/tourists/new', component: AdminTouristsComponent, canActivate:[AuthGuard] },
      { path:'admin/tourists', component: AdminTouristsComponent, canActivate:[AuthGuard] },
      { path:'admin/tourists/:id', component: AdminTouristsComponent, canActivate:[AuthGuard] },
      
      { path:'admin/bookings', component: AdminBookingsComponent, canActivate:[AuthGuard] },
      { path:'admin/bookings/:id', component: AdminTouristsComponent, canActivate:[AuthGuard] }
    ])

  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    TourOperatorAuthGuard,
    TourOperatorCategory,
    OperatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
