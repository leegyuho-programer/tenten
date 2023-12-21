import { create, StateCreator } from 'zustand';
import { createBearSlice } from './bearSlice';
import { createFishSlice } from './fishSlice';
import { FishSlice, BearSlice, SharedSlice } from '@/lib/types/zustand';
// 공식문서
// SlicePattern: https://docs.pmnd.rs/zustand/guides/slices-pattern#slicing-the-store-into-smaller-stores
// TypeScript: https://docs.pmnd.rs/zustand/guides/typescript

export const createSharedSlice: StateCreator<BearSlice & FishSlice, [], [], SharedSlice> = (set, get) => ({
  addBoth: () => {
    // you can reuse previous methods
    get().addBear();
    get().addFish();
    // or do them from scratch
    // set((state) => ({ bears: state.bears + 1, fishes: state.fishes + 1 })
  },
  getBoth: () => get().bears + get().fishes,
});

export const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createSharedSlice(...a),
}));
