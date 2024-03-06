import { create } from 'zustand';
import fetchShopsFromSupabase, { Shop } from '@/hooks/useFetchShops';

export type FetchShopsFunction = () => Promise<Shop[]>;

interface ShopStore {
    shops: Shop[];
    fetchShops: FetchShopsFunction;
}

const useShopStore = create<ShopStore>((set) => ({
    shops: [],
    fetchShops: async () => {
      try {
        const response = await fetchShopsFromSupabase(); 
        set({ shops: response }); 
        return response; 
      } catch (error) {
        console.error('Error fetching shops:', error);
        return []; 
      }
    }
}));

export default useShopStore;