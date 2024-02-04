import { useEffect } from 'react';

import { ITerminalEasterEggLineGroup } from '@/types';

import { useConfettiAnimation } from '@/hooks';

import {
  angryFaceImage,
  dogFaceImage,
  easterEggsImage,
  rufusImage,
  wavingHandImage,
} from '@/assets';

import { TerminalIcon } from './TerminalIcon';
import { TerminalLine } from './TerminalLine';
import { TerminalLineContainer } from './TerminalLineContainer';
import { TerminalLineGroup } from './TerminalLineGroup';

interface ITerminalEasterEggProps {
  group: ITerminalEasterEggLineGroup;
}

export const TerminalEasterEgg = ({ group }: ITerminalEasterEggProps) => {
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
            {`${congratsMessage}, you discovered an easter egg!`}
            <TerminalIcon src={easterEggsImage} />
          </TerminalLine>
        )}
        {name === 'HELLO_WORLD' && (
          <TerminalLine animation="GOLD">
            Greetings to you as well!
            <TerminalIcon src={wavingHandImage} size="SMALL" />
          </TerminalLine>
        )}
        {name === 'CHANGE_USER_DIR' && (
          <TerminalLine animation="GOLD">
            This website belongs to me, not you!
            <TerminalIcon src={angryFaceImage} size="SMALL" />
          </TerminalLine>
        )}
        {name === 'RUFUS' && (
          <TerminalLineContainer>
            <TerminalLine animation="GOLD">
              I couldn't find a practical function for these buttons, so if you
              happen to click them, you'll be treated to an adorable picture of
              me and Rufus. Rufus is a charming Golden Irish puppy, a mix of a
              Golden Retriever and Irish Setter. Consider yourself lucky!
              <TerminalIcon src={dogFaceImage} size="SMALL" />
            </TerminalLine>
            <div className="max-w-full w-max rounded-md overflow-hidden">
              <img
                src={rufusImage}
                alt="A cute picture of me and Rufus (my puppy)"
                className="object-contain"
                draggable={false}
              />
            </div>
          </TerminalLineContainer>
        )}
        {name === 'WRONG_COMMAND' && (
          <TerminalLine animation="RED">
            Oops, a small detour there! No biggie, we're all navigating through
            a bit of trial and error.
          </TerminalLine>
        )}
      </TerminalLineGroup>
    )
  );
};
