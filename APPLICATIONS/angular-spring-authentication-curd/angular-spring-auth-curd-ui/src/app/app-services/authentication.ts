import { User } from './user';

export interface Authentication {
  token: string;
  message: string;
  userBean: User;
}
