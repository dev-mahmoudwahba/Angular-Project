import { Component, OnInit } from '@angular/core';
import { User } from '../../Shared Classes and types/classes/user';
import { RegisterService } from '../../Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private register:RegisterService) { }
  userModel:User = new User("","","","","where you hear about us as?")
  ngOnInit(): void {
  }

 onSubmit()
  {
  console.log(this.userModel);
  this.register.register(this.userModel).subscribe((res) => {
    console.log("success",res);
    
  },(error) =>{
    console.log(error,"error");
    
  })}
}