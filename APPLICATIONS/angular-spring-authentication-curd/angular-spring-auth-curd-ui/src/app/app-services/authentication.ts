import { User } from './user';

export interface Authentication {
  token: string;
  key: string;
  message: string;
  userBean: User;
}
