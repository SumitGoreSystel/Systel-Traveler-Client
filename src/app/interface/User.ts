export interface User {
    token: string,
    userId: number,
    profileImage: string,
    userName: string,
    designation: string,
    emailId: string,
    mobileNo: string,
    roleId: string
}

export interface ParentMenu {
    userId: number;
    roleId: number;
    menuId: number;
    parentMenuId: number;
    subRoleId: number;
    subRoleName: string;
    subRoleCode: string;
    subRoleDesc: string;
    displayOrder: number;
    defaultChildMenuId: number;
    menuIconUrl: string;
    templatePath: string;
    isParent: number;
    childrenCount: number;
    childIsParent: number;
    childMenuList: ChildMenu[];
  }
  
  // child-menu.interface.ts
  
  export interface ChildMenu {
    userId: number;
    roleId: number;
    menuId: number;
    parentMenuId: number;
    subRoleId: number;
    subRoleName: string;
    subRoleCode: string;
    subRoleDesc: string;
    displayOrder: number;
    defaultChildMenuId: number;
    menuIconUrl: string;
    templatePath: string;
    isParent: number;
    childrenCount: number;
    childIsParent: number;
  }

  export interface MenuDataItem {
    items:ParentMenu[]
  }


