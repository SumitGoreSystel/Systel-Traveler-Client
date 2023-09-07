import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private serverService:ServerService,private router:Router) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      companyCode:['string']
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log(formData);
      this.serverService.userlogin(formData).subscribe(res=>{
        console.log(res.data)
        if( res.data.token.trim() != ""){
          localStorage.setItem('access_token', res.data.token.trim())
          this.serverService.validateToken().subscribe(res=>{
            console.log(res)
            localStorage.setItem('access_user',JSON.stringify(res) )
          })
          
        }
      })
    }
  }
}
