import {
  Dispatch,
  ElementRef,
  MutableRefObject,
  SetStateAction,
  useRef,
} from 'react';

import { AchievementName, Argument, UnknownCommand } from '@/types';

import { cn } from '@/utils';

import { rocketImage } from '@/assets';

interface IBackToTopButtonProps {
  terminalBodyRef: MutableRefObject<ElementRef<'div'> | null>;
  isBackToTopButtonVisible: boolean;
  setIsBackToTopButtonVisible: Dispatch<SetStateAction<boolean>>;
  setIsBackToTopButtonAnimationRunning: Dispatch<SetStateAction<boolean>>;
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

export const BackToTopButton = ({
  terminalBodyRef,
  isBackToTopButtonVisible,
  setIsBackToTopButtonVisible,
  setIsBackToTopButtonAnimationRunning,
  handleAchievement,
}: IBackToTopButtonProps) => {
  const backToTopButtonRef = useRef<ElementRef<'button'> | null>(null);

  const handleScrollToTop = () => {
    if (backToTopButtonRef.current != null) {
      backToTopButtonRef.current.classList.add('animate-takeoff');
    }
  };

  return (
    <button
      ref={backToTopButtonRef}
      className={cn(
        'absolute bottom-8 right-5 transition-opacity animate-bounce',
        isBackToTopButtonVisible
          ? 'opacity-100'
          : 'opacity-0 pointer-events-none',
      )}
      tabIndex={isBackToTopButtonVisible ? 0 : -1}
      onAnimationStart={(e) => {
        if (e.animationName === 'takeoff') {
          terminalBodyRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          setIsBackToTopButtonAnimationRunning(true);
        }
      }}
      onAnimationEnd={(e) => {
        if (e.animationName === 'takeoff') {
          setIsBackToTopButtonAnimationRunning(false);
          setIsBackToTopButtonVisible(false);
          handleAchievement({ name: 'ROCKET' });
        }
      }}
      onClick={handleScrollToTop}
      aria-label="Back to top of terminal"
      aria-hidden={!isBackToTopButtonVisible}
    >
      <img
        src={rocketImage}
        alt="Rocket"
        className="h-12 w-12 rotate-[-45deg]"
        draggable={false}
      />
    </button>
  );
};
