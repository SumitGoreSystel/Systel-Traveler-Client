import { Injectable } from '@angular/core';
import { User } from './interface/User';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserData:User = {
    token: '',
    userId: 0,
    profileImage: '',
    userName: 'John Doe',
    designation: 'Admin',
    emailId: 'jhon.doe@systelusa.com',
    mobileNo: '',
    roleId: ''
  }
  constructor() { }
}
