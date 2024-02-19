import { create } from 'zustand';

interface AuthState {
  user: any; 
}

interface AuthActions {
  setUser: (user: any) => void; 
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));