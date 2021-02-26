import { Injectable } from '@angular/core';
import * as JWT from 'jwt-decode';
import jwt_decode, { JwtPayload } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
  jwtToken: string;
  decodedToken: { [key: string]: string };

  constructor() {
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
      console.log(this.jwtToken);
      localStorage.setItem('token', this.jwtToken);
    }
  }

  decodeToken() {
    console.log('token exists...'+this.jwtToken)
    if (this.jwtToken) {
    const decodedToken = jwt_decode<any>(this.jwtToken);
    }
  }

  getJWTToken(){
    return localStorage.getItem('token');
  }

  getDecodeToken() {
    // return JWT(this.jwtToken);
    return this.decodeToken;
  }

  getUser() {
    console.log('ttt');
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.displayname : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    // const expiryTime: number = this.getExpiryTime();
    const expiryTime = +this.getExpiryTime();

    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
