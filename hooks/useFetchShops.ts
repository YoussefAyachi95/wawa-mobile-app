import supabase from '@/util/supabase';
import { Product } from './useFetchProduct';

export interface Shop {
    id: number;
    name: string;
    rating: number;
    ratings: number;
    distance: number;
    img: string;
    location: string;
    delivery: string;
    tags: string[];
    about: string;
    products: Product[];
}

const fetchShopsFromSupabase = async (): Promise<Shop[]> => {
    try {
      const { data, error } = await supabase.from('Shop').select('*');
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return []; 
    }
  };
  
export default fetchShopsFromSupabase;