import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user_id;
  constructor( private _activatedroute : ActivatedRoute) {
    const userId = _activatedroute.snapshot.params.user_id;
   }

  ngOnInit(): void {
    this._activatedroute.params.subscribe(params => {
      this.user_id = params['user_id'];
      console.log(this.user_id );
    });
    this.showUserDetails();
  }

  showUserDetails(){
    // let userId = this._activatedroute.snapshot.params.user_id;
    console.log(this.user_id);
  }

  ngOnDestroy() {
    this.user_id.unsubscribe();
  }

}
