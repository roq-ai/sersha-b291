import axios from 'axios';
import queryString from 'query-string';
import { ChildInterface, ChildGetQueryInterface } from 'interfaces/child';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChildren = async (query?: ChildGetQueryInterface): Promise<PaginatedInterface<ChildInterface>> => {
  const response = await axios.get('/api/children', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChild = async (child: ChildInterface) => {
  const response = await axios.post('/api/children', child);
  return response.data;
};

export const updateChildById = async (id: string, child: ChildInterface) => {
  const response = await axios.put(`/api/children/${id}`, child);
  return response.data;
};

export const getChildById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/children/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChildById = async (id: string) => {
  const response = await axios.delete(`/api/children/${id}`);
  return response.data;
};
