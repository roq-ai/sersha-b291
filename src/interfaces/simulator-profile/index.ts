import { ChildInterface } from 'interfaces/child';
import { GetQueryInterface } from 'interfaces';

export interface SimulatorProfileInterface {
  id?: string;
  profile_name: string;
  child_id: string;
  created_at?: any;
  updated_at?: any;

  child?: ChildInterface;
  _count?: {};
}

export interface SimulatorProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  profile_name?: string;
  child_id?: string;
}
