import { create } from 'zustand';
import fetchCategoriesFromSupabase, { CategoryData } from '@/hooks/useFetchCategories';

export interface Category {
    id: number;
    name: string;
    imageURL: string;
}

export type FetchCategoriesFunction = () => Promise<CategoryData[]>;

interface CategoryStore {
    categories: Category[];
    fetchCategories: FetchCategoriesFunction;
}

const useCategoryStore = create<CategoryStore>((set) => ({
    categories: [],
    fetchCategories: async () => {
      try {
        const response = await fetchCategoriesFromSupabase(); 
        set({ categories: response }); 
        return response; 
      } catch (error) {
        console.error('Error fetching categories:', error);
        return []; 
      }
    }
}));

export default useCategoryStore;