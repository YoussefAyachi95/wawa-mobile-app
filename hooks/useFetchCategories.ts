import supabase from '@/util/supabase';

export interface CategoryData {
    id: number;
    name: string;
    imageURL: string;
}

const fetchCategoriesFromSupabase = async (): Promise<CategoryData[]> => {
    try {
      const { data, error } = await supabase.from('Category').select('*');
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return []; 
    }
  };
  
export default fetchCategoriesFromSupabase;