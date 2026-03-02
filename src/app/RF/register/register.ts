import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserModel } from '../../Model/Usermodel';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Master } from '../../service/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  
  constructor(private service: Master, private router: Router) { }

  regiterform=new FormGroup({
    username:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
    password:new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
    fullname:new FormControl('',Validators.required),
    email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
    address:new FormControl(''),
    isagree:new FormControl(false,Validators.requiredTrue)
  })

  userobj: UserModel = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    address: '',
    isagree: false
  }

  Proceedregister() {
    if (this.regiterform.valid) {
      this.userobj = this.regiterform.value as UserModel;
      this.service.Userregister(this.userobj).subscribe(res => {
        alert("Registration Successfull");
        this.redirectToLogin();
      });

    }

  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }


}
