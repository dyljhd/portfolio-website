import { PropsWithChildren } from 'react';

import { Argument, FilePath, UnknownCommand } from '@/types';

import { TerminalLine } from './TerminalLine';

interface ITerminalLineGroupProps {
  as?: keyof HTMLElementTagNameMap;
  filePath: FilePath;
  command: UnknownCommand;
  argument: Argument;
  shouldShowCommand: boolean;
}

export const TerminalLineGroup = ({
  as: Tag = 'div',
  filePath,
  command,
  argument,
  shouldShowCommand,
  children,
}: PropsWithChildren<ITerminalLineGroupProps>) => {
  return (
    <div
      className="flex flex-col gap-5 my-8"
      aria-live="polite"
      aria-atomic={true}
    >
      {shouldShowCommand && (
        <TerminalLine classNameOverrides="break-all">{`${filePath} ${command} ${argument}`}</TerminalLine>
      )}
      <Tag className="flex flex-col gap-2.5">{children}</Tag>
    </div>
  );
};
