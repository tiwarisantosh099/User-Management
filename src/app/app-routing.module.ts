import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { ResourcesComponent } from './resources/resources.component';
import { SingleResourceComponent } from './single-resource/single-resource.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent
  },
  {
    path: 'register', 
    component: RegistrationComponent
  },
  {
    path: 'users', 
    component: UsersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'single_user/:user_id', 
    component: SingleUserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'resource/:res_id', 
    component: SingleResourceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'resources', 
    component: ResourcesComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
