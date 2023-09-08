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

export interface UserMenu {
    items: items[]
}

interface items {
    userId: number,
    roleId: number,
    menuId: number,
    parentMenuId: number,
    subRoleId: number,
    subRoleName: string,
    subRoleCode: string,
    subRoleDesc: string,
    displayOrder: number,
    defaultChildMenuId: 0,
    menuIconUrl: string,
    templatePath: string,
    isParent: number,
    childrenCount: number,
    childIsParent: number
}



