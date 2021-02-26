import { Component, OnInit } from '@angular/core';
import { SingleResourcesService } from '../_services/single-resources.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-single-resource',
  templateUrl: './single-resource.component.html',
  styleUrls: ['./single-resource.component.css']
})
export class SingleResourceComponent implements OnInit {

  res_id;
  resource;
  support;
  msg;
  constructor(private singleResourcesService: SingleResourcesService, private _activatedroute : ActivatedRoute) { 
    const userId = _activatedroute.snapshot.params.res_id;
   }

  ngOnInit(): void {
    this._activatedroute.params.subscribe(params => {
      this.res_id = params['res_id'];
      console.log(this.res_id );
    });
    this.getResource();
  }

  getResource(){
    console.log("GET");
    this.singleResourcesService.showSingleResource(this.res_id)
    
      .subscribe(
        data => {
          // console.log(data.JSON());
          console.log(data.headers);
          console.log(data);
          if(data.data.id){
            console.log('In the IF condition...');
            this.resource = data.data;
            this.support = data.support;
          }
          else{
            this.msg = "Sorry! The data couldn't be fetched.";
          }
        },
        error => {
          console.log(error);
          this.msg = "Due to some technical problem, couldn't load the data. Please try again later";
        }
      )
  }

}
