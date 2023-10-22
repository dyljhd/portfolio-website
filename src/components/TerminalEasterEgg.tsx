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
            Hello to you too!
            <TerminalIcon src={wavingHandImage} size="SMALL" />
          </TerminalLine>
        )}
        {name === 'CHANGE_USER_DIR' && (
          <TerminalLine animation="GOLD">
            This is my website, not yours!
            <TerminalIcon src={angryFaceImage} size="SMALL" />
          </TerminalLine>
        )}
        {name === 'RUFUS' && (
          <TerminalLineContainer>
            <TerminalLine animation="GOLD">
              I couldn't think of a use for these buttons, so instead if you
              click them, you get to see a cute picture of me and Rufus. He is a
              Golden Irish puppy, which is a Golden Retriever and Irish Setter
              crossbreed. Lucky you!
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
      </TerminalLineGroup>
    )
  );
};
