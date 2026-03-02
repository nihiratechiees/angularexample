import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Master } from '../../service/master';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel } from '../../Model/LoginModel';
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
      this.service.Userlogin(this.loginobj).subscribe((res:UserModel[]) => {
        if (res && res.length > 0) {
         // localStorage.setItem('username', res[0].username);
          this.service._isloggedin.set(true);
          this.service.loginuser.set(res[0].username);
          alert("Login Successful");
          this.router.navigate(['/dashboard']);
        } else {
          alert("Invalid credentials");
        }
      });
    }
  }

}
