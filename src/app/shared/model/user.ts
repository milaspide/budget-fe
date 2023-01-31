import { Salary } from "./salary";

export class User {
  userId?: number;
  name?: string;
  surname?: string;
  birthDate?: Date;
  username?: string;
  password?: string;
  email?: string;
  bankAccount?: number;
  fixedSaving?: number;
  createdOn?: Date;
  lastLogin?: Date;
  salary?: Salary;
}
