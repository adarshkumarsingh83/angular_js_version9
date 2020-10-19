export interface User {
  id: number;
  userName: string;
  email: string;
  userPwd: string;
  isAdmin: boolean;
  userRoles: string[];
}
