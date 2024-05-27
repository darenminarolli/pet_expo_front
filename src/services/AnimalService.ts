import axios,{AxiosResponse}  from 'axios';
import { Pet } from '../types/animal'

const BASE_URL = import.meta.env.VITE_BASE_URL_API
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });



export const petService = {
  getAllPets: async():Promise<Pet[]> =>{
    try {
      const response: AxiosResponse<Pet[]> = await api.get('/')
      return response.data ?? [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
    getPetsByType: async (petType: 'birds' | 'dogs' | 'cats'): Promise<Pet[]> => {
        try {
          const response: AxiosResponse<Pet[]> = await api.get(`/type/${petType}`);
          return response.data ?? [];
        } catch (error) {
          console.error(`Error fetching ${petType}:`, error);
          return [];
        }
      },
      getPetByName: async (petType: 'birds' | 'dogs' | 'cats', name: string): Promise<Pet[]> => {
        try {
          const response: AxiosResponse<Pet[]> = await api.get(`/single/${petType}?name=${name}`);
          return response.data ?? [];
        } catch (error) {
          console.error(`Error getting ${name}`, error);
          return [];
        }
      },
      createPet: async (req:FormData) => {
        try {
          const response = await api.post('/', req, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          return response.data;
        } catch (error) {
          console.error('Error creating pet', error);
        }
      },
      deletePet: async (req: string)=>{
        try {
          const response:AxiosResponse = await api.delete(`/${req}`);
          return response.data;
        } catch (error) {
          
        }console.error('Error deleting pet')
      }
      }

  