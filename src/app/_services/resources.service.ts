import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { UserDisplayModel } from '../all_models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private _url = environment.apiUrl+'/api/unknown';

  constructor(private http: HttpClient) { }

  getResources(){
    return this.http.get<any>(this._url);
  }
}
