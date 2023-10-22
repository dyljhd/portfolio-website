import { createContext } from 'react';

import { AchievementName } from '@/types';

import { ACHIEVEMENT_NAMES } from '@/constants';

interface IAchievementContext {
  foundAchievementNames: AchievementName[];
  foundAchievements: number;
  totalAchievements: number;
  handleAchievementFound: (name: AchievementName) => void;
  isAchievementAlreadyFound: (name: AchievementName) => boolean;
  shouldDisplayAchievement: (name: AchievementName) => boolean;
}

export const AchievementContext = createContext<IAchievementContext>({
  foundAchievementNames: [],
  foundAchievements: 0,
  totalAchievements: Object.keys(ACHIEVEMENT_NAMES).length,
  handleAchievementFound: () => null,
  isAchievementAlreadyFound: () => false,
  shouldDisplayAchievement: () => true,
});
