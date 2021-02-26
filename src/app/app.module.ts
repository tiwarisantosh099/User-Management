import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { UsersComponent } from './users/users.component';
import { ResourcesComponent } from './resources/resources.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { SingleResourceComponent } from './single-resource/single-resource.component';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { UniversalAppInterceptor } from './_services/universal-app-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    ResourcesComponent,
    SingleUserComponent,
    SingleResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    authInterceptorProviders, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalAppInterceptor,
      multi: true, 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
