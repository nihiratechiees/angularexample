import { Component, signal } from '@angular/core';
import { AssociateModel } from '../Model/associateModel';
import { email, form, minLength, required, FormField } from '@angular/forms/signals'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signalformx',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule,
    MatCheckboxModule, FormField,MatButtonModule,JsonPipe],
  templateUrl: './signalformx.html',
  styleUrl: './signalformx.css',
})
export class Signalformx {

  _obj = signal<AssociateModel>({
    code: '',
    name: '',
    email: '',
    address: '',
    isactive: false
  })

  _form = form(this._obj, (scemaPath) => {
    required(scemaPath.code, { message: 'Code is required' }),
     required(scemaPath.name, { message: 'Name is required' }),
     minLength(scemaPath.name,5,{message:'Name should be minimum 5 characters'}),
      required(scemaPath.email, { message: 'Email is required' }),
     email(scemaPath.email,{message:'Please enter valid email'})
  })

  Save(event:Event){
    event.preventDefault();
    if(this._form().valid()){
console.log(this._form().value())
console.log(this._obj())
    }
    

  }

  assign(){
    this._obj.set({
      code:'002',
      name: 'Ramesh',
      email: 'r@in.com',
      address: '2nd street',
      isactive: true
    })
  }
}
