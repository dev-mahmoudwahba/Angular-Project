import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersData:any;
  errorMessage:any;
  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      data=>{
        this.usersData = data
        
      },
      errorData=>{
        this.errorMessage = errorData
      }

    )
  }

}
