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
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private serverService:ServerService,private router:Router) {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      companyCode:['string']
    });
  }

  loginUser() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      this.serverService.userlogin(formData).subscribe(res=>{
        console.log(res.data)
        if( res.data.token.trim() != ""){
          localStorage.setItem('token', res.data.token.trim())
        }
      })
    }
  }
}
