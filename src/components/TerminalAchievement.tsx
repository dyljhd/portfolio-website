import { useEffect } from 'react';

import { ITerminalAchievementLineGroup, Noop } from '@/types';

import { useConfettiAnimation } from '@/hooks';

import {
  grinningWithSweatFaceImage,
  pleadingFaceImage,
  rocketImage,
  trophyImage,
  worriedFaceImage,
} from '@/assets';

import { TerminalIcon } from './TerminalIcon';
import { TerminalLine } from './TerminalLine';
import { TerminalLineGroup } from './TerminalLineGroup';

interface ITerminalAchievementProps {
  group: ITerminalAchievementLineGroup;
}

export const TerminalAchievement = ({ group }: ITerminalAchievementProps) => {
  const {
    name,
    filePath,
    command,
    argument,
    metadata: {
      shouldDisplay,
      shouldShowCommand,
      isAlreadyFound,
      congratsMessage,
    },
  } = group;

  const { handleConfetti } = useConfettiAnimation();

  useEffect(() => {
    const callNTimes = (fn: Noop, n: number, delay: number) => {
      if (n === 0) return;
      fn();
      setTimeout(() => callNTimes(fn, n - 1, delay), delay);
    };

    if (shouldDisplay && !isAlreadyFound && name === 'ALL_MAIN_COMMANDS') {
      return callNTimes(handleConfetti, 5, 1000);
    }

    if (shouldDisplay && !isAlreadyFound) handleConfetti();
  }, []);

  return (
    shouldDisplay && (
      <TerminalLineGroup
        filePath={filePath}
        command={command}
        argument={argument}
        shouldShowCommand={shouldShowCommand}
      >
        {!isAlreadyFound && (
          <TerminalLine animation="GOLD">
            {`${congratsMessage}, you earned an achievement!`}
            <TerminalIcon src={trophyImage} size="SMALL" />
          </TerminalLine>
        )}
        {name === 'DISABLE_ANIMATIONS' && (
          <>
            <TerminalLine animation="GOLD">BORINGGG!</TerminalLine>
            <TerminalLine animation="GOLD">
              This is just a joke. I recognize that some may need this
              capability. I hope that the terminal looks good even without the
              animations!
              <TerminalIcon src={worriedFaceImage} size="SMALL" />
            </TerminalLine>
          </>
        )}
        {name === 'ROCKET' && (
          <>
            <TerminalLine animation="GOLD">
              TO INFINITY AND <del>BACK TO TOP</del> <del>BEYOND</del> BACK TO
              BOTTOM!
              <TerminalIcon src={rocketImage} size="SMALL" />
            </TerminalLine>
            <TerminalLine animation="GOLD">
              Clicking this button the first time might have seemed a bit
              pointless, but hey, you were treated to some cool confetti!
              Consider giving it another click, hopefully not too much to ask
              for!
              <TerminalIcon src={pleadingFaceImage} size="SMALL" />
            </TerminalLine>
          </>
        )}
        {name === 'COMMAND_HISTORY' && (
          <>
            <TerminalLine animation="GOLD">HOLDING ONTO THE PAST!</TerminalLine>
            <TerminalLine animation="GOLD">
              Is there perhaps another command you could try instead?
            </TerminalLine>
          </>
        )}
        {name === 'ALL_MAIN_COMMANDS' && (
          <>
            <TerminalLine animation="GOLD">
              YOU KNOW TOO MUCH!
              <TerminalIcon src={worriedFaceImage} size="SMALL" />
            </TerminalLine>
            <TerminalLine animation="GOLD">
              You've inputted all the commands, and now you know everything
              there is to know. Hopefully, you're not too disappointed!
              <TerminalIcon src={grinningWithSweatFaceImage} size="SMALL" />
            </TerminalLine>
            <TerminalLine animation="GOLD">
              Thank you for exploring my portfolio; I hope it brought a smile to
              your face!
            </TerminalLine>
          </>
        )}
      </TerminalLineGroup>
    )
  );
};
