import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData, UserMasterDTO } from 'src/app/interface/UserMasterDTO';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserMasterService {
  private readonly BaseURL = environment.apiURL;

  constructor(private _http:HttpClient,private _userService:UserService) { }

  UserMaster:UserMasterDTO={
    userId: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    dob: new Date(),
    emailId: '',
    mobileNo: '',
    designation: '',
    isActive: 0,
    isDeleted: 0,
    createdBy: '',
    createdOn: new Date(),
    modifiedBy: '',
    modifiedOn: new Date(),
    actionUser: this._userService.UserData.userId,
    profileImage: '',
    activeUserId: 0,
    webRootPath: '',
    profileImageBase64: '',
    username: '',
    assignedWC: ''
  }
  

  getUsersList(): Observable<UserData> {
    return this._http.post<UserData>(`${this.BaseURL}/users/UserMasterCrud`,this.UserMaster);
  }

}
