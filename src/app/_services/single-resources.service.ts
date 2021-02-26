import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SingleResourcesService {

  constructor(private http: HttpClient) { }

  private _users_url = environment.apiUrl+'/api/unknown/';
  
  showSingleResource(res_id){
    let id = res_id;
    return this.http.get<any>(this._users_url+id);
  }
}
