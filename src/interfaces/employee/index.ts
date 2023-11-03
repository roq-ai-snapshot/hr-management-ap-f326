import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  employee_number: string;
  job_title: string;
  department: string;
  date_hired: any;
  salary: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  employee_number?: string;
  job_title?: string;
  department?: string;
}
