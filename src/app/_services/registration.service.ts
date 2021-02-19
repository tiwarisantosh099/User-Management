import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { UserRegisterModel } from '../all_models';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private http: HttpClient) { }

  private _register_url = environment.apiUrl+'/api/register';

  
  private user = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }
  
  registerUser(user: UserRegisterModel){
    return this.http.post<any>(this._register_url, user, httpOptions);
  }
}
