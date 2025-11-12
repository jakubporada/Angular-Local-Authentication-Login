import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  activeForm: string = 'Login';
  signupUsers: any[]  = [];
  signupObj: any={
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  loginObj: any={
    email: '',
    password: '',
  };

  constructor() { } 

  ngOnInit() {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExist != undefined) {
      // User exists, proceed with login
      alert(`Welcome back, ${isUserExist.userName}!`); 
    }
    else {
      // User does not exist, show error message
      alert('Invalid email or password!');
    }
  }
}
