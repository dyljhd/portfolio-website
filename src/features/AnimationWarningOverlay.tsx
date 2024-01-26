import { useContext } from 'react';

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { AchievementName, Argument, UnknownCommand } from '@/types';

import { AnimationContext } from '@/context';

interface IAnimationWarningOverlayProps {
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

export const AnimationWarningOverlay = ({
  handleAchievement,
}: IAnimationWarningOverlayProps) => {
  const {
    isAnimationsEnabled,
    isInitialAnimationsWarningAccepted,
    handleToggleAnimationsEnabled,
    handleAcceptInitialAnimationsWarning,
  } = useContext(AnimationContext);

  const handleOnNoClick = () => {
    handleAcceptInitialAnimationsWarning();
    handleAchievement({ name: 'DISABLE_ANIMATIONS' });
  };

  const handleOnYesClick = () => {
    handleToggleAnimationsEnabled();
    handleAcceptInitialAnimationsWarning();
  };

  if (!(!isAnimationsEnabled && !isInitialAnimationsWarningAccepted)) {
    return null;
  }

  return (
    <div
      className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-opacity-90 bg-black"
      aria-modal="true"
    >
      <div className="absolute z-10 p-3 pt-10 w-full flex flex-col items-center gap-4 text-white text-center font-console">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-sm">
            Just before you begin interacting with my site, are you happy with
            animations being shown?
          </h2>
          <p className="font-medium text-xs">
            They may not be suitable if you are sensitive to motion effects,
            prone to motion sickness, or prefer a static browsing experience.
          </p>
          <p className="font-medium text-xs">
            They can be toggled on and off at any point from within the header
            if you change your mind later.
          </p>
        </div>
        <div className="flex gap-2.5">
          <button
            className="font-console font-medium flex items-center gap-0.5 text-xs border-2 border-green-700 text-gray-900 bg-green-400 hover:bg-green-500 rounded-md p-1.5 w-max focus:outline-dashed outline-offset-2 outline-2 outline-green-700"
            onClick={handleOnYesClick}
          >
            <CheckIcon className="h-5 w-5" />
            Yes
          </button>
          <button
            className="font-console font-medium flex items-center gap-0.5 text-xs border-2 border-red-700 text-gray-900 bg-red-400 hover:bg-red-500 rounded-md p-2 w-max focus:outline-dashed outline-offset-2 outline-2 outline-green-700"
            onClick={handleOnNoClick}
          >
            <XMarkIcon className="h-5 w-5" />
            No
          </button>
        </div>
      </div>
    </div>
  );
};
