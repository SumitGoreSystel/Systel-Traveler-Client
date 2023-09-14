import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
import { User } from '../interface/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private serverService:ServerService,private router:Router, private userService:UserService) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      companyCode:['string']
    });
  }
  ngOnInit(): void {
    if(this.serverService.isAuthenticated()){
      this.router.navigate(['/'])
    }
  }

  loginError:string|null=null;

  loginUser() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.serverService.userlogin(formData).subscribe(res=>{
        if( res.data.token.trim() != ""){
          localStorage.setItem('access_token', res.data.token.trim())
          this.router.navigate(['/traveler'])
        }else{
          this.loginError=res.data.designation
        }
      })
    }
  }
}
