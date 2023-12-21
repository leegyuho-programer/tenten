import { StateCreator } from 'zustand';
import { FishSlice } from '@/lib/types/zustand';

export const createFishSlice: StateCreator<FishSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});
