import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private service: Master, private router: Router) { }

  userobj: UserModel = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    address: '',
    isagree: false
  }

  Proceedregister(form: NgForm) {
    if (form.valid) {
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
