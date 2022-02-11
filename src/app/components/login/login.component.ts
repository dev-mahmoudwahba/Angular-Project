import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../Shared Classes and types/classes/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  logUser:LoginUser = new LoginUser("", "")
  onSubmit() {
    console.log(this.logUser);
  }

  ngOnInit(): void {
  }

}
