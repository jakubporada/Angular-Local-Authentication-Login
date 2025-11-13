import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  activeForm: string = 'Login';
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  loginObj: any = {
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
    alert('Registration successful! You can now log in.');
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExist != undefined) {
      alert(`Welcome back, ${isUserExist.userName}!`); 
    } else {
      alert('Invalid email or password!');
    }
  }
}
