import { createContext } from 'react';

import { EasterEggName } from '@/types';

import { EASTER_EGG_NAMES } from '@/constants';

interface IEasterEggContext {
  foundEasterEggNames: EasterEggName[];
  foundEasterEggs: number;
  totalEasterEggs: number;
  handleEasterEggFound: (name: EasterEggName) => void;
  isEasterEggAlreadyFound: (name: EasterEggName) => boolean;
  shouldDisplayEasterEgg: (name: EasterEggName) => boolean;
}

export const EasterEggContext = createContext<IEasterEggContext>({
  foundEasterEggNames: [],
  foundEasterEggs: 0,
  totalEasterEggs: Object.keys(EASTER_EGG_NAMES).length,
  handleEasterEggFound: () => null,
  isEasterEggAlreadyFound: () => false,
  shouldDisplayEasterEgg: () => true,
});
