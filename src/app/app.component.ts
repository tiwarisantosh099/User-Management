import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidTrackerr';
  user_Id;

  constructor(private router: Router){}

  logout(){
    console.log('USer should be looged o0ut');
    localStorage.removeItem('token');
    this.router.navigate(['']);

  }
  public showUserName(evnt: any):void {
    console.log('Picked date: ', evnt);
    console.log(evnt);
    this.user_Id = evnt;
  }
}
