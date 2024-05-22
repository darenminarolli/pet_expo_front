import axios,{AxiosResponse}  from 'axios';
import { Pet } from '../types/animal'

const BASE_URL = 'https://freetestapi.com/api/v1/'
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });



export const petService = {
    getPets: async (petType: 'birds' | 'dogs' | 'cats'): Promise<Pet[]> => {
        try {
          const response: AxiosResponse<Pet[]> = await api.get(`/${petType}`);
          return response.data ?? [];
        } catch (error) {
          console.error(`Error fetching ${petType}:`, error);
          return [];
        }
      },
}
  