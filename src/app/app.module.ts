import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([

      //Routes for tourist
      { path:'', component: HomeComponent},
      { path:'login', component: LoginComponent},
      { path:'tours', component:ToursComponent },
      { path:'tours/<int:id>', component:TourDetailsComponent },
      { path:'tour-operators', component: TourOperatorsComponent },
      { path:'tour-operators/<int:id>', component: TourOperatorsComponent },
      { path:'shopping-cart', component: ShoppingCartComponent  },
      { path:'check-out', component:CheckOutComponent  },
      { path:'order-success', component:OrderSuccessComponent },

      //Routes for tour operator
      { path:'tour-operator/tours/new', component: TourListingFormComponent },
      { path:'tour-operator/tours', component: TourOperatorListingComponent },
      { path:'tour-operator/bookings', component:  TourOperatorBookingsComponent },

      //Routes for admin
      { path:'admin/tours', component: AdminToursComponent }, 
      { path:'admin/tour-operators', component: AdminTourOperatorsComponent }, 
      { path:'admin/bookings', component: AdminBookingsComponent },
      { path:'admin/tourists', component: AdminTouristsComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }