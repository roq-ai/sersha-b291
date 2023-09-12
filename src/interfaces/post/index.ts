import { ChildInterface } from 'interfaces/child';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  content: string;
  child_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  child?: ChildInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  child_id?: string;
  user_id?: string;
}
