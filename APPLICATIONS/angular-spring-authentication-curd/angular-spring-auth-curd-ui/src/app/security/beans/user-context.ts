export interface UserContext {
  userName: string;
  email: string;
  isAdmin: boolean;
  isUser: boolean;
  isGuest: boolean;
  isAuthenticate: boolean;
  userToken: string;
  key: string;
}
