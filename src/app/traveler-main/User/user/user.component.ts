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
  filteredUsers:any

  ngOnInit(): void {
    this._userMasterService.getUsersList().subscribe((userlist:UserData)=>{
      this.UserList = userlist.users
       this.filteredUsers = userlist.users.map(user => ({
        Name: `${user.firstName}${user.middleName ? ' ' + user.middleName : ''} ${user.lastName}`,
        Designation: user.designation,
        Phone: user.mobileNo,
        Email: user.emailId,
        Username: user.username,
        CreatedBy: user.createdBy,
        AssignedWorkcenter: user.assignedWC,
        Active:user.isActive
    }));
    })
  }



  onCheckboxStatusChange(event: { row: any, isChecked: boolean }) {
    const { row, isChecked } = event;
    // Handle the checkbox status change here
    console.log('Checkbox status changed:', row, 'isChecked:', isChecked);
  }
}
