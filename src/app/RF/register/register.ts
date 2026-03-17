import { Component, signal } from '@angular/core';
// import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserModel } from '../../Model/Usermodel';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Master } from '../../service/master';
import { Router } from '@angular/router';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule,FormField],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private service: Master, private router: Router) { }

  // regiterform=new FormGroup({
  //   username:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
  //   password:new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
  //   fullname:new FormControl('',Validators.required),
  //   email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
  //   address:new FormControl(''),
  //   isagree:new FormControl(false,Validators.requiredTrue)
  // })
  userobj = signal<UserModel>({
    username: '',
    password: '',
    fullname: '',
    email: '',
    address: '',
    isagree: false
  });

  regiterform = form(this.userobj, (scemaPath) => {
    required(scemaPath.username, { message: 'Username is required' }),
      minLength(scemaPath.username, 5,{message:'Username must be at least 5 characters long'}),
      required(scemaPath.password, { message: 'Password is required' }),
      minLength(scemaPath.password, 8,{message:'Password must be at least 8 characters long'}),
      required(scemaPath.fullname,{ message: 'Fullname is required' }),
      required(scemaPath.email,{ message: 'Email is required' }),
      email(scemaPath.email,{ message: 'Please enter valid email' }),
      required(scemaPath.isagree)
  })


  Proceedregister(event:Event) {
    event.preventDefault();
    if (this.regiterform().valid()) {
     // this.userobj = this.regiterform.value as UserModel;
      this.service.Userregister(this.userobj()).subscribe(res => {
        alert("Registration Successfull");
        this.redirectToLogin();
      });

    }

  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }


}
