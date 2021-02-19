import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'users', component: UsersComponent},
  {path: 'single_user/:user_id', component: SingleUserComponent},
  {path: 'resources', component: ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
