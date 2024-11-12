import { create } from 'zustand'; // Correção da importação

interface QtyStore {
  QtyProd: number;
  setQtyProd: (loaded: number) => void;
}

export const useQtyStore = create<QtyStore>((set) => ({
  QtyProd: 0,
  setQtyProd: (loaded: number) => set({ QtyProd: loaded }),
}));
