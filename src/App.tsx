import { PropsWithChildren } from 'react';

import { ACHIEVEMENT_NAMES, EASTER_EGG_NAMES } from '@/constants';

import {
  AchievementContext,
  AnimationContext,
  EasterEggContext,
  UserContext,
} from '@/context';

import {
  useAchievements,
  useAnimationsEnabled,
  useEasterEggs,
  useTerminalLineGroups,
  useUser,
} from '@/hooks';

import { TerminalBody, TerminalHeader } from '@/features';

const Providers = ({ children }: PropsWithChildren) => {
  const { isAnimationsEnabled, handleToggleAnimationsEnabled } =
    useAnimationsEnabled();
  const {
    foundEasterEggNames,
    handleEasterEggFound,
    isEasterEggAlreadyFound,
    shouldDisplayEasterEgg,
  } = useEasterEggs();
  const {
    foundAchievementNames,
    handleAchievementFound,
    isAchievementAlreadyFound,
    shouldDisplayAchievement,
  } = useAchievements();
  const { user, handleUserChange, getUserFirstName } = useUser();

  return (
    <AnimationContext.Provider
      value={{ isAnimationsEnabled, handleToggleAnimationsEnabled }}
    >
      <UserContext.Provider
        value={{ user, handleUserChange, getUserFirstName }}
      >
        <EasterEggContext.Provider
          value={{
            foundEasterEggNames,
            foundEasterEggs: foundEasterEggNames.length,
            totalEasterEggs: Object.keys(EASTER_EGG_NAMES).length,
            handleEasterEggFound,
            isEasterEggAlreadyFound,
            shouldDisplayEasterEgg,
          }}
        >
          <AchievementContext.Provider
            value={{
              foundAchievementNames,
              foundAchievements: foundAchievementNames.length,
              totalAchievements: Object.keys(ACHIEVEMENT_NAMES).length,
              handleAchievementFound,
              isAchievementAlreadyFound,
              shouldDisplayAchievement,
            }}
          >
            {children}
          </AchievementContext.Provider>
        </EasterEggContext.Provider>
      </UserContext.Provider>
    </AnimationContext.Provider>
  );
};

const AppContent = () => {
  const {
    terminalLineGroups,
    handleCommand,
    handleEasterEgg,
    handleAchievement,
  } = useTerminalLineGroups();

  return (
    <div className="h-full flex flex-col bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2 px-1.5">
      <TerminalHeader
        handleCommand={handleCommand}
        handleEasterEgg={handleEasterEgg}
        handleAchievement={handleAchievement}
      />
      <TerminalBody
        terminalLineGroups={terminalLineGroups}
        handleCommand={handleCommand}
        handleAchievement={handleAchievement}
      />
    </div>
  );
};

const App = () => {
  return (
    <Providers>
      <AppContent />
    </Providers>
  );
};

export default App;
