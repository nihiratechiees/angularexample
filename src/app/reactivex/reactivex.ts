import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reactivex',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule,MatIconModule
  ],
  templateUrl: './reactivex.html',
  styleUrl: './reactivex.css',
})
export class Reactivex {

  // customerform1:FormGroup;
  // constructor(private builder:FormBuilder) {
  //   this.customerform1=this.builder.group({
  //     id:this.builder.control({ value: '', disabled: true }),
  //     fullname:this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(3)])),
  //     email:this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  //     phone:this.builder.control('', Validators.required)
  //   })

  // }
  builder = inject(FormBuilder);
  customerform = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    fullname: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(3)])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.required),
    address: this.builder.array([
     // this.builder.control('')
    ])
  })

  customerform1 = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    fullname: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(3)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl('', Validators.required)
  })

  get addresslist() {
    return this.customerform.get('address') as FormArray;
  }
  addAddress() {
    this.addresslist.push(this.builder.control(''));
  }
  removeaddress(index: number) {
    this.addresslist.removeAt(index);
  }

  Save() {
    if (this.customerform.valid) {
      console.log('data from value :' + JSON.stringify(this.customerform.value));
      // console.log('data from raw value :' + JSON.stringify(this.customerform.getRawValue()));
      // console.log(this.customerform.get('fullname')?.value)
    }

  }

  assigndata() {
    this.customerform.setValue({
      id: '101',
      fullname: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: ['street1','street2','street3']
    })
  }

  addressdata=['new street1','new street2','new street3'];

  patchdata() {
    for(let item of this.addressdata){
      this.addresslist.push(this.builder.control(item));
    }
    this.customerform.patchValue({
      id: '102',
      fullname: 'John Doe 2',
      email: 'john.doe@example.com2'
    })
  }

  setfullname() {
    this.customerform.get('fullname')?.setValue('Robert');
  }

  resetdata() {
    this.customerform.reset();
    this.addresslist.clear();
  }



}
