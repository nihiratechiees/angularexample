import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Master } from '../../service/master';
import { Router } from '@angular/router';
//import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel } from '../../Model/LoginModel';
import { UserModel } from '../../Model/Usermodel';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [ MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule,FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 constructor(private service: Master, private router: Router) { }

  loginobj=signal<LoginModel>({
    username: '',
    password: ''
  });

  // loginform=new FormGroup({
  //   username:new FormControl('',Validators.required),
  //   password:new FormControl('',Validators.required)
  // })

  loginform=form(this.loginobj,(scemapath)=>{
    required(scemapath.username),
    required(scemapath.password)
  })

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  ProceedLogin(event:Event) {
    event.preventDefault();
    if (this.loginform().valid()) {
      //this.loginobj = this.loginform.value as LoginModel;
      this.service.Userlogin(this.loginobj()).subscribe((res:UserModel[]) => {
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
