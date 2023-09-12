import axios from 'axios';
import queryString from 'query-string';
import { SimulatorProfileInterface, SimulatorProfileGetQueryInterface } from 'interfaces/simulator-profile';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSimulatorProfiles = async (
  query?: SimulatorProfileGetQueryInterface,
): Promise<PaginatedInterface<SimulatorProfileInterface>> => {
  const response = await axios.get('/api/simulator-profiles', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSimulatorProfile = async (simulatorProfile: SimulatorProfileInterface) => {
  const response = await axios.post('/api/simulator-profiles', simulatorProfile);
  return response.data;
};

export const updateSimulatorProfileById = async (id: string, simulatorProfile: SimulatorProfileInterface) => {
  const response = await axios.put(`/api/simulator-profiles/${id}`, simulatorProfile);
  return response.data;
};

export const getSimulatorProfileById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/simulator-profiles/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSimulatorProfileById = async (id: string) => {
  const response = await axios.delete(`/api/simulator-profiles/${id}`);
  return response.data;
};
