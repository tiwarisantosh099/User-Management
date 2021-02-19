import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../_services/registration.service';
import { UserRegisterModel } from '../all_models';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
  
  apiMsg = '';
  stausMsg;

  constructor(private registrationService: RegistrationService) { }

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
      "password": "pistol"
  }
    console.log(userModel);
    this.registrationService.registerUser(userModel)
    .subscribe(
      data => {
        console.log('Success !!!', data);
        if(data.id){
          this.apiMsg = 'You have successfully logged in but the email address is used as "eve.holt@reqres.in" and the password is used as the "pistol"';
          this.stausMsg = 'You have successfully loggedin...';
        }
        else{
          this.stausMsg = 'Due to some problem you could not loggedin successfully...';
        }

        // localStorage.setItem('token', data.token);
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

}
