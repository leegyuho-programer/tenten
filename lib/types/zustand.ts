export interface FishSlice {
  fishes: number;
  addFish: () => void;
}

export interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

export interface SharedSlice {
  addBoth: () => void;
  getBoth: () => void;
}
