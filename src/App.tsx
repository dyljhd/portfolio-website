import { PropsWithChildren, useState } from 'react';

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
  const {
    isAnimationsEnabled,
    isInitialAnimationsWarningAccepted,
    handleToggleAnimationsEnabled,
    handleAcceptInitialAnimationsWarning,
  } = useAnimationsEnabled();
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
      value={{
        isAnimationsEnabled,
        isInitialAnimationsWarningAccepted,
        handleToggleAnimationsEnabled,
        handleAcceptInitialAnimationsWarning,
      }}
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

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const handleToggleIsMenuExpanded = () => setIsMenuExpanded((prev) => !prev);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <TerminalHeader
        isMenuExpanded={isMenuExpanded}
        handleToggleIsMenuExpanded={handleToggleIsMenuExpanded}
        handleCommand={handleCommand}
        handleEasterEgg={handleEasterEgg}
        handleAchievement={handleAchievement}
      />
      <TerminalBody
        terminalLineGroups={terminalLineGroups}
        isMenuExpanded={isMenuExpanded}
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
