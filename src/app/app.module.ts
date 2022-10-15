import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

const appRoute:Routes=
[
    {path:'',component:SigninComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
