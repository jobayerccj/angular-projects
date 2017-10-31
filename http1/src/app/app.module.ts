import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path:'', component: UserComponent},
  {path:'about', component: AboutComponent}
]; 
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
