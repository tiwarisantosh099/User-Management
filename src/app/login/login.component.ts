import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../_services/registration.service';
import { UserRegisterModel } from '../all_models';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public user_name_value: EventEmitter<any> = new EventEmitter<any>();
  apiMsg = '';
  stausMsg;

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  register(registerForm){
    let email = "eve.holt@reqres.in";
    let password = "pistol";
    console.log('Submited'+email);
    console.log(registerForm);

    // let userModel = new UserRegisterModel(email, password);
    let userModel = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    console.log(userModel);
    this.registrationService.registerUser(userModel)
    .subscribe(
      data => {
        console.log('Success !!!', data);
        if(data.id){
          this.apiMsg = 'You have successfully registered in but the email address is used as "eve.holt@reqres.in" and the password is used as the "pistol"';
          this.stausMsg = 'You have successfully registered...';
          // localStorage.setItem('token', data.token);
          this.authService.setToken(data.token);
          // this.user_name_value.emit(data.token);
          setTimeout(() => {
            this.router.navigate['/users'];
          }, 1000);
        }
        else{
          this.stausMsg = 'Due to some problem you could not loggedin successfully...';
        }

        
        // localStorage.setItem('user_id', data.result.master_user_id);
        // localStorage.setItem('registered', 'half');
        // if(data.registered == false){
        //   this.showError(data.msg);
        //   this.submitted = false;
        //   // this.errMsg = data.msg;
        // }
        // else{
        //   this.submitted = true;
        //   this.showSuccess(data.msg);
        // }

      },
      error => {
        console.log('Failed !!!', error);
        // this.showError("There seems some problem as we couldn't regsiter yourself. Kindly try again later.");
        // // this.errMsg = "There seems some problem as we couldn't regsiter yourself. Kindly try again later.";
        // this.submitted = false;
        this.stausMsg = 'Due to some problem you could not loggedin successfully...';
      }
    );
  }

  public pickDate(): void {
    console.log('func called from child');
    this.user_name_value.emit("from parent Emitted");
}

}
