import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { UserDisplayModel } from '../all_models';


@Injectable({
  providedIn: 'root'
})
export class SingleUserService {
  constructor(private http: HttpClient) { }

  private _users_url = environment.apiUrl+'/api/users/';
  
  showSingleUsers(user_id){
    let id = user_id;
    return this.http.get<any>(this._users_url+id);
  }
}