import { Component, OnInit } from '@angular/core';
import { UserMasterService } from '../user-master.service';
import { UserData, UserMasterDTO } from 'src/app/interface/UserMasterDTO';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private _userMasterService:UserMasterService){}

  UserList:UserMasterDTO[]=[];

  ngOnInit(): void {
    this._userMasterService.getUsersList().subscribe((userlist:UserData)=>{
      this.UserList = userlist.users
    })
  }
}
