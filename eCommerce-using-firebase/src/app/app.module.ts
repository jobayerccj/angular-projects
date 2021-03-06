import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//import {MatInputModule} from '@angular/material';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AgmCoreModule } from '@agm/core';
import { ChartModule } from 'angular2-chartjs';
import { AngularDraggableModule } from 'angular2-draggable';
import { ShareModule } from 'ngxshare/share.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SimpleTimer } from 'ng2-simple-timer';

import { AuthService } from './../app/auth.service';
import { AuthGuardService } from './../app/auth-guard.service';
import { UserService } from './../app/user.service';
import { AdminauthguardService } from './../app/adminauthguard.service';
import { CategoryService } from './../app/category.service';
import { ProductService } from './../app/product.service';
import { ShoppingCartService } from './../app/shopping-cart.service';
import { OrderService } from './../app/order.service';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { TimerComponent } from './timer/timer.component';
import { ChartComponent } from './chart/chart.component';
import { DragComponent } from './drag/drag.component';
import { ShareComponent } from './share/share.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { WeatherComponent } from './weather/weather.component';
import { LastfmComponent } from './lastfm/lastfm.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { MaterialComponent } from './material/material.component';
import { TranslateComponent } from './translate/translate.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessfulComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    GoogleMapsComponent,
    TimerComponent,
    ChartComponent,
    DragComponent,
    ShareComponent,
    ProductCardComponent,
    WeatherComponent,
    LastfmComponent,
    LeafletComponent,
    MaterialComponent,
    TranslateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //MatInputModule,
    //MatFormFieldModule,
    //MatAutocompleteModule,
    LeafletModule.forRoot(),
    ShareModule,
    HttpModule,
    AngularDraggableModule,
    ChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCIcunV0S9znpFyGBugsWSxKcqnuj5OwOY'
    }),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'check-out', component:CheckOutComponent, canActivate:[AuthGuardService]},
      {path:'order-success', component:OrderSuccessfulComponent, canActivate:[AuthGuardService]},
      {path:'login', component:LoginComponent},
      {path:'my-orders', component:MyOrdersComponent, canActivate:[AuthGuardService]},

      {
        path:'admin/products', 
        component:AdminProductsComponent, 
        canActivate:[AuthGuardService, AdminauthguardService]
      },
      {
        path:'admin/products/new', 
        component:ProductFormComponent, 
        canActivate:[AuthGuardService, AdminauthguardService]
      },
      {
        path:'admin/orders', 
        component:AdminOrdersComponent, 
        canActivate:[AuthGuardService, AdminauthguardService]
      },

      //other
      {path:'google-maps', component:GoogleMapsComponent},
      {path:'timer', component: TimerComponent},
      {path:'chart', component: ChartComponent},
      {path:'drag', component: DragComponent},
      {path:'share', component: ShareComponent},
      {path:'weather', component: WeatherComponent},
      {path:'lastfm', component: LastfmComponent},
      {path:'leaflet', component: LeafletComponent},
      {path:'material', component: MaterialComponent},
      {path:'translate', component: TranslateComponent},
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminauthguardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    SimpleTimer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
