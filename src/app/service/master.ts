import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { UserModel } from '../Model/Usermodel';
import { LoginModel } from '../Model/LoginModel';
import { CompanyModel } from '../Model/Companymode';

@Injectable({
  providedIn: 'root',
})
export class Master {
  baseurl: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  _isloggedin = signal(false);
  loginuser=signal('');

  Userregister(data: UserModel) {
    return this.http.post(this.baseurl + "/users", data);
  }

  Userlogin(data: LoginModel) {
    return this.http.get<UserModel[]>(this.baseurl + "/users?username=" + data.username + "&password=" + data.password);

  }
  Isloggedin() {
    return this._isloggedin();
  }

  GetCompanies() {
    return this.http.get<CompanyModel[]>(this.baseurl + "/companies");
  }

}
