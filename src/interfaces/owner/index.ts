import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OwnerInterface {
  id?: string;
  user_id: string;
  owner_number: string;
  company_owned: string;
  years_owned: number;
  industry: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface OwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  owner_number?: string;
  company_owned?: string;
  industry?: string;
}
