import { UserEntity } from "src/user/entities/user.entity";

export enum Role {
  Admin = 'admin',
  Customer = 'customer',
}

type User = {
  id: number;
  username: string;
  password: string;
  role: Role;
};

export interface IAuthenticate {
   user: UserEntity;
   token: string;
}
