import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  cred: Sign = new Sign("", "", "", "");
  passwordsMatch: boolean = true;
  emailMatch: boolean = true;

  constructor(private route: Router) {}

  ngOnInit() {}

  submit() {
    if (this.passwordsMatch === false) {
      alert("Invalid password");
    } else if (this.passwordsMatch === true && this.emailMatch === true) {
      this.route.navigate(['login']);
    }
  }

  checkPasswords() {
    if (this.cred.password === this.cred.re_password) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }
  }

  checkEmail() {
    if (this.cred.email.match("[a-zA-Z0-9._%+-]+@[a-z]+\\.[a-zA-Z]{2,}")) {
      this.emailMatch = true;
    } else {
      alert("Invalid email");
      this.emailMatch = false;
    }
  }
}

export class Sign {
  name: string;
  email: string;
  password: string;
  re_password: string;

constructor(name: string, email: string, password: string, re_password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.re_password = re_password;
  }
}

  

  