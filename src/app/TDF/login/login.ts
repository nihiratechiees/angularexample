import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Master } from '../../service/master';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel, LoginResponse } from '../../Model/LoginModel';
import { UserModel } from '../../Model/Usermodel';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private service: Master, private router: Router) { }

  loginobj: LoginModel = {
    username: '',
    password: ''
  }

  loginform=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  ProceedLogin() {
    if (this.loginform.valid) {
      this.loginobj = this.loginform.value as LoginModel;
      this.service.login(this.loginobj).subscribe((res:LoginResponse) => {
        if (res !=null) {
         // localStorage.setItem('username', res[0].username);
          this.service._isloggedin.set(true);
          this.service.loginuser.set(this.loginobj.username);
          this.service.token.set(res.token);
          alert("Login Successful");
          this.router.navigate(['/employee']);
        } else {
          alert("Invalid credentials");
        }
      });
    }
  }

}
