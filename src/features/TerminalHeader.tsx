import { ElementRef, useContext, useEffect, useRef } from 'react';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon,
  MinusSmallIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { GifIcon } from '@heroicons/react/24/solid';

import {
  AchievementName,
  Argument,
  EasterEggName,
  Noop,
  UnknownCommand,
} from '@/types';

import {
  AchievementContext,
  AnimationContext,
  EasterEggContext,
  UserContext,
} from '@/context';

import { HandleCommand } from '@/hooks';

import { cn } from '@/utils';

import { commandPromptIconImage, easterEggsImage, trophyImage } from '@/assets';

interface ITerminalHeaderProps {
  isMenuExpanded: boolean;
  handleToggleIsMenuExpanded: Noop;
  handleCommand: ({ trigger, input }: HandleCommand) => void;
  handleEasterEgg: ({
    name,
    command,
    argument,
  }: {
    name: EasterEggName;
    command?: UnknownCommand;
    argument?: Argument;
  }) => void;
  handleAchievement: ({
    name,
    command,
    argument,
  }: {
    name: AchievementName;
    command?: UnknownCommand;
    argument?: Argument;
  }) => void;
}

export const TerminalHeader = ({
  isMenuExpanded,
  handleToggleIsMenuExpanded,
  handleCommand,
  handleEasterEgg,
  handleAchievement,
}: ITerminalHeaderProps) => {
  const achievementCountRef = useRef<ElementRef<'span'> | null>(null);
  const easterEggCountRef = useRef<ElementRef<'span'> | null>(null);

  const {
    isAnimationsEnabled,
    isInitialAnimationsWarningAccepted,
    handleToggleAnimationsEnabled,
  } = useContext(AnimationContext);
  const { foundEasterEggs, totalEasterEggs } = useContext(EasterEggContext);
  const { foundAchievements, totalAchievements } =
    useContext(AchievementContext);
  const { getUserFirstName } = useContext(UserContext);

  const handleAddedAchievement = () => {
    if (achievementCountRef.current != null) {
      achievementCountRef.current.classList.add('animate-tada');
    }
  };
  const handleOnAddedAchievementAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === 'tada') {
      if (achievementCountRef.current != null) {
        achievementCountRef.current.classList.remove('animate-tada');
      }
    }
  };

  const handleAddedEasterEgg = () => {
    if (easterEggCountRef.current != null) {
      easterEggCountRef.current.classList.add('animate-tada');
    }
  };
  const handleOnAddedEasterEggAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === 'tada') {
      if (easterEggCountRef.current != null) {
        easterEggCountRef.current.classList.remove('animate-tada');
      }
    }
  };

  useEffect(() => {
    if (foundAchievements > 0) {
      handleAddedAchievement();
    }
  }, [foundAchievements]);

  useEffect(() => {
    if (foundEasterEggs > 0) {
      handleAddedEasterEgg();
    }
  }, [foundEasterEggs]);

  const renderHelpButton = () => {
    return (
      <button
        className="flex items-center gap-1.5 text-xs border-[1px] border-transparent hover:border-blue-600 text-gray-600 hover:text-white hover:bg-blue-500 rounded-md p-1.5 focus:outline-dashed outline-2 outline-green-700 disabled:opacity-30 disabled:hover:bg-inherit disabled:hover:border-transparent disabled:hover:text-gray-600"
        onClick={() => handleCommand({ trigger: 'MANUAL', input: 'help' })}
        disabled={!isInitialAnimationsWarningAccepted}
        aria-label="Help! What can I do?"
      >
        <InformationCircleIcon className="h-6 w-6" />
        <span className="hidden md:inline-block">What can I do?</span>
      </button>
    );
  };

  const renderClearButton = () => {
    return (
      <button
        className="flex items-center gap-1.5 text-xs border-[1px] border-transparent hover:border-red-600 text-gray-600 hover:text-white hover:bg-red-400 rounded-md p-1.5 focus:outline-dashed outline-2 outline-green-700 disabled:opacity-30 disabled:hover:bg-inherit disabled:hover:border-transparent disabled:hover:text-gray-600"
        onClick={() => handleCommand({ trigger: 'MANUAL', input: 'clear' })}
        disabled={!isInitialAnimationsWarningAccepted}
        aria-label="Clear the terminal"
      >
        <TrashIcon className="h-6 w-6" />
        <span className="hidden md:inline-block">Clear terminal</span>
      </button>
    );
  };

  const renderAnimationButton = () => {
    return (
      <button
        className="flex items-center gap-1.5 text-xs border-[1px] border-transparent hover:border-red-500 text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200 rounded-md p-1.5 focus:outline-dashed outline-2 outline-green-700 disabled:opacity-30 disabled:hover:bg-none disabled:hover:border-transparent disabled:hover:text-gray-600"
        onClick={() => {
          handleToggleAnimationsEnabled();
          handleAchievement({ name: 'DISABLE_ANIMATIONS' });
        }}
        disabled={!isInitialAnimationsWarningAccepted}
        aria-label={`${
          isAnimationsEnabled ? 'Disable' : 'Enable'
        } terminal animations`}
      >
        <GifIcon className="h-6 w-6" />
        <span className="hidden md:inline-block">
          {isAnimationsEnabled ? 'Disable animations' : 'Enable animations'}
        </span>
      </button>
    );
  };

  const renderAchievementScore = () => {
    return (
      <div className="flex items-center gap-1.5">
        <img
          src={trophyImage}
          alt="Achievement trophy"
          className="w-7 h-7"
          draggable={false}
        />
        <span
          ref={achievementCountRef}
          className="text-sm"
          onAnimationEnd={handleOnAddedAchievementAnimationEnd}
        >
          {foundAchievements}/{totalAchievements}
        </span>
      </div>
    );
  };

  const renderEasterEggScore = () => {
    return (
      <div className="flex items-center gap-1.5">
        <img
          src={easterEggsImage}
          alt="Easter eggs"
          className="w-8 h-8"
          draggable={false}
        />
        <span
          ref={easterEggCountRef}
          className="text-sm"
          onAnimationEnd={handleOnAddedEasterEggAnimationEnd}
        >
          {foundEasterEggs}/{totalEasterEggs}
        </span>
      </div>
    );
  };

  return (
    <header>
      <div className="absolute top-2 left-2 right-2 h-[50px] flex items-center justify-between gap-2 border-[1px] border-b-0 border-black rounded-t-md font-console font-medium bg-gray-100 pl-1 pr-2 sm:pr-3">
        <div className="flex items-center gap-1 overflow-hidden">
          <img
            src={commandPromptIconImage}
            alt="Command prompt terminal"
            className="h-12 w-12 min-w-[3rem] min-h-[3rem]"
            draggable={false}
          />
          <h1
            className={cn(
              'font-console font-medium overflow-hidden whitespace-nowrap text-ellipsis',
              isAnimationsEnabled && 'animate-glow_flicker_alt',
            )}
          >
            <span>
              {getUserFirstName({ variant: 'POSSESSIVE' })} Command Prompt
            </span>
          </h1>
        </div>
        <a
          href="#terminal-input"
          className="hidden pointer-events-none lg:block font-console text-xs transition-opacity focus:opacity-100 opacity-0 p-1 focus:outline-dashed outline-offset-4 outline-2 outline-green-700 mr-auto ml-5"
          aria-label="Skip to terminal command input"
        >
          Skip
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">{renderAchievementScore()}</div>
          <div className="hidden md:block">{renderEasterEggScore()}</div>
          <div className="hidden xl:flex items-center gap-1.5">
            {renderHelpButton()}
            {renderClearButton()}
            {renderAnimationButton()}
          </div>
          <div className="flex items-center gap-1">
            <button
              className="flex xl:hidden items-center gap-1.5 text-xs border-[1px] border-transparent hover:border-gray-400 text-gray-600 hover:text-gray-900 hover:bg-gray-300 rounded-md p-1.5 focus:outline-dashed outline-2 outline-green-700 disabled:opacity-30 disabled:hover:bg-inherit disabled:hover:border-transparent disabled:hover:text-gray-600"
              onClick={handleToggleIsMenuExpanded}
              disabled={!isInitialAnimationsWarningAccepted}
              aria-label={`${isMenuExpanded ? 'Close' : 'Open'} menu actions`}
            >
              {isMenuExpanded ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </button>
            <button
              className="border-[1px] border-transparent hover:border-blue-600 text-gray-600 hover:text-white hover:bg-blue-500 rounded-md p-0.5 focus:outline-dashed outline-2 outline-green-700 disabled:opacity-30 disabled:hover:bg-inherit disabled:hover:border-transparent disabled:hover:text-gray-600"
              onClick={() => handleEasterEgg({ name: 'RUFUS' })}
              disabled={!isInitialAnimationsWarningAccepted}
              aria-label="This button might minimize the terminal. Click to find out!"
            >
              <MinusSmallIcon className="h-6 w-6" />
            </button>
            <button
              className="text-gray-600 border-[1px] border-transparent hover:border-red-600 hover:text-white hover:bg-red-400 rounded-md p-0.5 focus:outline-dashed outline-2 outline-green-700 disabled:opacity-30 disabled:hover:bg-inherit disabled:hover:border-transparent disabled:hover:text-gray-600"
              onClick={() => handleEasterEgg({ name: 'RUFUS' })}
              disabled={!isInitialAnimationsWarningAccepted}
              aria-label="This button might close the terminal. Click to find out!"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuExpanded && (
        <div className="absolute z-10 top-[58px] left-2 right-2 h-[50px] flex items-center justify-between gap-2 border-[1px] border-t-0 border-black font-console font-medium bg-gray-100 px-2">
          <div className="flex items-center gap-4 ml-auto">
            <div className="block md:hidden">{renderAchievementScore()}</div>
            <div className="block md:hidden">{renderEasterEggScore()}</div>
            <div className="flex items-center gap-1.5">
              <div className="hidden sm:block">{renderHelpButton()}</div>
              {renderClearButton()}
              {renderAnimationButton()}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
