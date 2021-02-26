import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { AuthService } from './auth.service';
// import { LocalStorageService } from './storage.service';
// import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService,
    // private authStorageService: LocalStorageService,
    // private jwtService: JWTTokenService
    ) {
}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
    console.log('In activate sec');
    // this.authService.getUser()
    // if (this.authService.getUser()) {
    //   console.log('In activate sec2');
    //   if (this.authService.isTokenExpired()) {
    //     console.log('Do not have access...');
    //   } else {
    //     return true;
    //   }
    // } 
    if (this.authService.getJWTToken()) {
      // console.log('In activate sec2');
      // if (this.authService.isTokenExpired()) {
      //   console.log('Do not have access...');
      // } else {
      //   return true;
      // }
      // Token doesn't have the proper user info that's why it is not working properly. We are just checking the token part so that user can access routes if there is token.
      return true;
    }
    // else 
    // {
    //   return new Promise((resolve) => {
    //     this.authService.signIncallBack().then((e) => {
    //       resolve(true);
    //     }).catch((e) => {
    //       // Should Redirect Sign-In Page
    //     });
    //   });
    // }
  }
}
