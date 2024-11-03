import { create } from 'zustand'; // Correção da importação

interface UserStore {
    user: string;
    setUser: (loaded: string) => void;
}
  
export const useUserStore = create<UserStore>((set) => ({
  user: "",
  setUser: (loaded: string) => set({ user: loaded }),
}));
  