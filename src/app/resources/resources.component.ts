import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../_services/resources.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resoresItems;
  comp_msg;

  constructor(private resourcesService: ResourcesService, private router: Router) { }

  ngOnInit(): void {
    this.showResources();
  }

  showResources(){
    this.resourcesService.getResources()
      .subscribe(
        data => {
          console.log(data);
          if(data.data.length){
            this.resoresItems = data.data;
          }
          else{
            this.comp_msg = "Due to some technical issue the data couldn't be fetched....";
          }
          console.log(data.data.length);
        },
        error => {
          console.log(error);
          this.comp_msg = "Due to some technical issue the data couldn't be fetched. Please try agai later!";
        }
      )
  }


  goToSingleRes(resId){
    this.router.navigate(['resource/'+resId]);
  }
}
