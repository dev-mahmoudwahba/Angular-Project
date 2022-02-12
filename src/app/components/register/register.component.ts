import { Component, OnInit } from '@angular/core';
import { User } from '../../Shared Classes and types/classes/user';
import { RegisterService } from '../../Services/register.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ForbiddenNameValidator } from 'src/app/userName.validator';
import { ConfirmPasswordValidator } from 'src/app/confirmPassword.Validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private register: RegisterService, private fb: FormBuilder) {}
  // userModel:User = new User("","","","","where you hear about us as?")
  ngOnInit(): void {}

  registerationForm = this.fb.group({
    userName: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        ForbiddenNameValidator(/admin/),
      ],
    ],
    password: [''],
    confirmPassword: [''],
    email: [''],
    ddl: [''],
  },
  { validator: [ConfirmPasswordValidator] }
  );

  get userName() {
    return this.registerationForm.get('userName');
  }

  // registerationForm =new FormGroup({
  //   userName:new FormControl(""),
  //   password:new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   email:new FormControl(""),
  //   ddl:new FormControl("")

  // })

  //  onSubmit()
  //   {
  //   console.log(this.userModel);
  //   this.register.register(this.userModel).subscribe((res) => {
  //     console.log("success",res);

  //   },(error) =>{
  //     console.log(error,"error");

  //   })}
}
