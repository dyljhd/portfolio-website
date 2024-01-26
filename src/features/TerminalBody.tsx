import {
  ElementRef,
  UIEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

import {
  AchievementName,
  Argument,
  ITerminalLineGroupsState,
  UnknownCommand,
} from '@/types';

import { AnimationContext, UserContext } from '@/context';

import { HandleCommand } from '@/hooks';

import { cn } from '@/utils';

import {
  BackToTopButton,
  TerminalAchievement,
  TerminalCommand,
  TerminalEasterEgg,
  TerminalInputLine,
  TerminalLine,
  TerminalLineContainer,
} from '@/components';

import { AnimationWarningOverlay } from '.';

interface ITerminalBodyProps {
  terminalLineGroups: ITerminalLineGroupsState;
  isMenuExpanded: boolean;
  handleCommand: ({ trigger, input }: HandleCommand) => void;
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

export const TerminalBody = ({
  terminalLineGroups,
  isMenuExpanded,
  handleCommand,
  handleAchievement,
}: ITerminalBodyProps) => {
  const { isAnimationsEnabled } = useContext(AnimationContext);
  const { getUserFirstName } = useContext(UserContext);

  const terminalBodyRef = useRef<ElementRef<'div'> | null>(null);

  const [isBackToTopButtonVisible, setIsBackToTopButtonVisible] =
    useState(false);
  const [
    isBackToTopButtonAnimationRunning,
    setIsBackToTopButtonAnimationRunning,
  ] = useState(false);

  useEffect(() => {
    const terminalLineGroupsCount = terminalLineGroups.groups.length;
    const isTerminalLineGroups = terminalLineGroupsCount > 0;
    const latestTerminalLineGroup =
      terminalLineGroups.groups[terminalLineGroupsCount - 1];

    if (
      isTerminalLineGroups &&
      latestTerminalLineGroup?.events.shouldScrollToBottom
    ) {
      terminalBodyRef.current?.scrollTo(
        0,
        terminalBodyRef.current?.scrollHeight,
      );
    }
  }, [terminalLineGroups.groups]);

  const handleOnScroll: UIEventHandler<HTMLDivElement> = (event) => {
    if (isBackToTopButtonAnimationRunning) return;
    setIsBackToTopButtonVisible(event.currentTarget.scrollTop >= 300);
  };

  const renderTerminalGroups = () => {
    return terminalLineGroups.groups.map((group) => {
      if (group.type === 'COMMAND') {
        return <TerminalCommand key={group.key} group={group} />;
      }
      if (group.type === 'EASTER_EGG') {
        return <TerminalEasterEgg key={group.key} group={group} />;
      }
      if (group.type === 'ACHIEVEMENT') {
        return <TerminalAchievement key={group.key} group={group} />;
      }
      return null;
    });
  };

  return (
    <main
      ref={terminalBodyRef}
      onScroll={handleOnScroll}
      className={cn(
        'absolute top-[58px] left-2 right-2 bottom-2 border-[1px] border-black bg-[#2D2E2C] p-3 max-w-full overflow-y-auto rounded-b-sm',
        isMenuExpanded && 'top-[107px]',
        isAnimationsEnabled && 'screen-static animate-screen_static',
      )}
    >
      <AnimationWarningOverlay handleAchievement={handleAchievement} />
      <TerminalLineContainer>
        <TerminalLine variant="HEADING" animation="STANDARD" isInTabOrder>
          {getUserFirstName({ variant: 'POSSESSIVE' })} Portfolio Terminal
          [Version 1.1.0] [26/01/24]
        </TerminalLine>
        <TerminalLine variant="SUBHEADING" isInTabOrder>
          Welcome to my portfolio website! Type the `help` command, or click
          the&nbsp;
          <InformationCircleIcon className="inline-block h-6 w-6" /> in the
          terminal header to get started!
        </TerminalLine>
      </TerminalLineContainer>
      {renderTerminalGroups()}
      <TerminalInputLine
        terminalLineGroups={terminalLineGroups}
        handleCommand={handleCommand}
        handleAchievement={handleAchievement}
      />
      <BackToTopButton
        terminalBodyRef={terminalBodyRef}
        isBackToTopButtonVisible={isBackToTopButtonVisible}
        setIsBackToTopButtonVisible={setIsBackToTopButtonVisible}
        setIsBackToTopButtonAnimationRunning={
          setIsBackToTopButtonAnimationRunning
        }
        handleAchievement={handleAchievement}
      />
    </main>
  );
};
