import { create } from 'zustand'; // Correção da importação

interface FontStore {
  fontsLoaded: boolean;
  setFontsLoaded: (loaded: boolean) => void;
}

export const useFontStore = create<FontStore>((set) => ({
  fontsLoaded: false,
  setFontsLoaded: (loaded: boolean) => set({ fontsLoaded: loaded }),
}));
