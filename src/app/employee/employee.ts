import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Master } from '../service/master';
import { UserModel } from '../Model/Usermodel';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule, MatIconModule,MatSelectModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  constructor(private service: Master, private router: Router) { }
  builder = inject(FormBuilder);
  countries=['India','USA','England']

  employeeform = this.builder.group({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    mobileno: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    remarks: new FormControl(''),
    isprime: new FormControl(true),
    address: new FormArray([])
  })

  Save() {
    console.log(this.employeeform.value)

  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  get addresslist() {
    return this.employeeform.get('address') as FormArray;
  }

  removeaddress(i: number) {
    if (confirm('Are you sure to remove?'))
      this.addresslist.removeAt(i);
  }

  addaddress() {
    this.addresslist.push(
      this.builder.group({
        city: this.builder.control('', Validators.required),
        state: this.builder.control('', Validators.required),
        country: this.builder.control('', Validators.required),
        zipcode: this.builder.control('', Validators.required)
      })
    )
  }

}
