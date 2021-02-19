import { Component, OnInit } from '@angular/core';
import { UserDisplayModel } from '../all_models';
import { UsersService } from '../_services/users.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users_lists;
  msg = '';
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.showUsers()
      .subscribe(
        data => {
          console.log(data);
          if(data.data.length > 0){
            this.users_lists = data.data;
          }
          else{
            this.msg = 'There are no users to display....'; 
          }
          
        },
        error => {
          this.msg = 'Due to some issue the users can not be fetched. Please try again after some time.'; 
          console.log(error);
        }
      )
  }

  goToSingleUser(userId){
    this.router.navigate(['/single_user/'+userId]);
  }
}
