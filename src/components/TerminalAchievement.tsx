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
              This is only a joke. I understand that some need the ability to do
              this, hence why I added it. I hope I made the terminal look nice
              enough with the animations turned off!
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
              Made it kinda pointless clicking this button for the first time,
              but you got to see some cool confetti, so clicking it again
              (hopefully) isn't too much to ask for
              <TerminalIcon src={pleadingFaceImage} size="SMALL" />
            </TerminalLine>
          </>
        )}
        {name === 'COMMAND_HISTORY' && (
          <>
            <TerminalLine animation="GOLD">HOLDING ONTO THE PAST!</TerminalLine>
            <TerminalLine animation="GOLD">
              Surely there is a new command you could execute instead?!
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
              You have entered all of the main commands for information about
              me. You know everything there is to know; hopefully you are not
              too disappointed!
              <TerminalIcon src={grinningWithSweatFaceImage} size="SMALL" />
            </TerminalLine>
            <TerminalLine animation="GOLD">
              Thanks for taking a look at my portfolio; I hope I was able to put
              a smile on your face!
            </TerminalLine>
          </>
        )}
      </TerminalLineGroup>
    )
  );
};
