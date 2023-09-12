import { PostInterface } from 'interfaces/post';
import { SimulatorProfileInterface } from 'interfaces/simulator-profile';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ChildInterface {
  id?: string;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  post?: PostInterface[];
  simulator_profile?: SimulatorProfileInterface[];
  user?: UserInterface;
  _count?: {
    post?: number;
    simulator_profile?: number;
  };
}

export interface ChildGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  user_id?: string;
}
