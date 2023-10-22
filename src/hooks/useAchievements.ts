import { useState } from 'react';

import { AchievementName } from '@/types';

import { ACHIEVEMENT_ONE_TIME_SHOW } from '@/constants';

export const useAchievements = () => {
  const [foundAchievementNames, setFoundAchievementNames] = useState<
    AchievementName[]
  >([]);

  const handleAchievementFound = (name: AchievementName) => {
    setFoundAchievementNames((prev) => {
      if (!prev.includes(name)) return [...prev, name];
      return prev;
    });
  };

  const isAchievementAlreadyFound = (name: AchievementName) => {
    return foundAchievementNames.includes(name);
  };

  const shouldDisplayAchievement = (name: AchievementName) => {
    return !(
      isAchievementAlreadyFound(name) && ACHIEVEMENT_ONE_TIME_SHOW[name]
    );
  };

  return {
    foundAchievementNames,
    setFoundAchievementNames,
    handleAchievementFound,
    isAchievementAlreadyFound,
    shouldDisplayAchievement,
  };
};
