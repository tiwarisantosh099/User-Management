import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { SingleUserService } from '../_services/single-user.service';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user_id;
  msg = '';
  user_info;
  user_info_support;
  constructor( private _activatedroute : ActivatedRoute, private singleUserService: SingleUserService) {
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
    this.singleUserService.showSingleUsers(this.user_id)
      .subscribe(
        data => {
          console.log(data);
         if(data.data.id){
          this.user_info = data.data;
          this.user_info_support = data.support;
          }
        },
        error => {
          console.log(error);
        }
      )
  }

  // ngOnDestroy() {
  //   this.user_id.unsubscribe();
  // }

}
