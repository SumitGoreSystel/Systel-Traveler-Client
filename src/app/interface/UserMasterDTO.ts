export interface UserData {
  users: UserMasterDTO[];
}

export interface UserMasterDTO {
  userId: number,
  firstName: string,
  middleName: string,
  lastName: string,
  dob: Date,
  emailId: string,
  mobileNo: string,
  designation: string,
  isActive: number,
  isDeleted: number,
  createdBy: string,
  createdOn: Date,
  modifiedBy: string,
  modifiedOn: Date,
  actionUser: number,
  profileImage: string,
  activeUserId: number,
  webRootPath: string,
  profileImageBase64: string,
  username: string,
  assignedWC: string
}

