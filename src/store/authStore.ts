import create from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, isAdmin: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: (email, isAdmin) => 
    set({ 
      user: { 
        id: Math.random().toString(36).substr(2, 9),
        email,
        isAdmin
      }
    }),
  logout: () => set({ user: null }),
}));