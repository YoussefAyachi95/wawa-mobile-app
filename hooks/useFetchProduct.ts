import supabase from '@/util/supabase';

export interface Product {
    id: number;
    name: string;
    price: number;
    info: string;
    img: string;
    shopId: number;
    categoryId: number;
}

const fetchProductsFromSupabase = async (): Promise<Product[]> => {
    try {
      const { data, error } = await supabase.from('Product').select('*');
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return []; 
    }
  };
  
export default fetchProductsFromSupabase;