import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular/service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  loggedIn:  string = null;
  username: any = null;
  password: any = null;

  constructor(
    private _service: AngularService,
    private _builder: FormBuilder,
    private _loginservice: LoginService
  ) {
    this.loginForm = this._builder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('currentUser');
    this._service.setDirective(1);
  }
  save(username,password) {
  	this.username=username;
  	this.password-password;
  	console.log(this.username);
  	console.log(this.password);
    this._service.setDirective(2);
    this._loginservice.login(this.username, this.password);
  }
}
