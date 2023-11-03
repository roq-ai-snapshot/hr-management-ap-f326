import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HrManagerInterface {
  id?: string;
  user_id: string;
  manager_number: string;
  department: string;
  experience_years: number;
  certifications: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HrManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  manager_number?: string;
  department?: string;
  certifications?: string;
}
