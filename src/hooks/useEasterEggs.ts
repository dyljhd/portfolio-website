import { useState } from 'react';

import { EasterEggName } from '@/types';

import { EASTER_EGG_ONE_TIME_SHOW } from '@/constants';

export const useEasterEggs = () => {
  const [foundEasterEggNames, setFoundEasterEggsNames] = useState<
    EasterEggName[]
  >([]);

  const handleEasterEggFound = (name: EasterEggName) => {
    setFoundEasterEggsNames((prev) => {
      if (!prev.includes(name)) return [...prev, name];
      return prev;
    });
  };

  const isEasterEggAlreadyFound = (name: EasterEggName) => {
    return foundEasterEggNames.includes(name);
  };

  const shouldDisplayEasterEgg = (name: EasterEggName) => {
    return !(isEasterEggAlreadyFound(name) && EASTER_EGG_ONE_TIME_SHOW[name]);
  };

  return {
    foundEasterEggNames,
    setFoundEasterEggsNames,
    handleEasterEggFound,
    isEasterEggAlreadyFound,
    shouldDisplayEasterEgg,
  };
};
