import axios from 'axios';
import { ApiResponse, Character } from '../types/Character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getCharacters = async (page: number = 1, name?: string): Promise<ApiResponse> => {
  const response = await api.get('/character', {
    params: {
      page,
      name: name || undefined,
    },
  });
  
  return response.data;
  
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await api.get(`/character/${id}`);
  return response.data;
};
