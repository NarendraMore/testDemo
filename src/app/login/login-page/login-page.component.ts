import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  forgotPassword: boolean = false
  forgotForm!: FormGroup;
  loginData: any
  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mail_id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    this.forgotForm = new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      mail_id: new FormControl('', [Validators.required]),
      new_password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required])
    })



  }
  onClickLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value, 'login data');
    }
    const loginData = this.loginForm.value;
    this.router.navigate(['/dashboard/nav']);
  }


  fogotPassword() {
    this.forgotPassword = true;
  }
  onClickforgotPassword() {
    // if (this.forgotForm.valid) {
    //   console.log(this.forgotForm.value, 'forgot data');
    //   console.log(this.forgotForm.value.user_name, 'username');

    // }
    // this.vote.forgotPassword(this.forgotForm.value, this.forgotForm.value.username).subscribe((data: any) => {


    //   // console.log(data,'forgot');

    // })
    // this.forgotPassword = false;
  }
  onclickCancelForgotform() {
    this.forgotForm.reset();
  }
}
