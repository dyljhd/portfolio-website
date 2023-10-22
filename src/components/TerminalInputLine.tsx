import { ElementRef, KeyboardEvent, useContext, useRef, useState } from 'react';

import {
  AchievementName,
  Argument,
  ITerminalLineGroupsState,
  UnknownCommand,
} from '@/types';

import { UserContext } from '@/context';

import { HandleCommand } from '@/hooks';

import { getFilePath } from '@/utils';

import { TerminalLine } from '@/components';

interface ITerminalInputLineProps {
  terminalLineGroups: ITerminalLineGroupsState;
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

export const TerminalInputLine = ({
  terminalLineGroups,
  handleCommand,
  handleAchievement,
}: ITerminalInputLineProps) => {
  const { user } = useContext(UserContext);

  const terminalInputRef = useRef<ElementRef<'input'> | null>(null);

  const [terminalInput, setTerminalInput] = useState('');
  const [curHistoryCommandId, setCurHistoryCommandId] = useState<string | null>(
    null,
  );

  const handleEnterKeyDown = () => {
    handleCommand({ trigger: 'STANDARD', input: terminalInput });
    setCurHistoryCommandId(null);
    setTerminalInput('');
    terminalInputRef.current?.blur();
  };

  const handleArrowUpKeyDown = () => {
    let prev = null;

    for (let i = 0; i < terminalLineGroups.groups.length; i++) {
      const line = terminalLineGroups.groups[i];

      if (line.command === '') continue;

      if (line.key === curHistoryCommandId) break;

      prev = line;
    }

    if (prev == null) return;

    handleAchievement({ name: 'COMMAND_HISTORY' });
    setCurHistoryCommandId(prev.key);
    setTerminalInput(
      `${prev.command}${prev.argument.length > 0 ? ` ${prev.argument}` : ''}`,
    );
  };

  const handleArrowDownKeyDown = () => {
    let next = null;
    let stopNextIteration = false;

    for (let i = 0; i < terminalLineGroups.groups.length; i++) {
      const line = terminalLineGroups.groups[i];

      if (line.command === '') continue;

      if (stopNextIteration) {
        next = line;
        break;
      }

      if (line.key === curHistoryCommandId) {
        stopNextIteration = true;
      }
    }

    if (next == null) {
      setCurHistoryCommandId(null);
      setTerminalInput('');
      return;
    }

    setCurHistoryCommandId(next.key);
    setTerminalInput(
      `${next.command}${next.argument.length > 0 ? ` ${next.argument}` : ''}`,
    );
  };

  const handleBackspaceKeyDown = () => {
    setTerminalInput((prev) => prev.substring(0, prev.length - 1));
  };

  const handleUnknownKeyDown = (keyValue: string) => {
    if (keyValue.length !== 1) return;

    const charCode = keyValue.charCodeAt(0);

    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32 ||
        charCode === 46 ||
        charCode === 47
      )
    ) {
      return;
    }

    setTerminalInput((prev) => prev + keyValue);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyValue = event.key;

    if (keyValue === 'Enter') return handleEnterKeyDown();

    if (keyValue === 'ArrowUp') {
      event.preventDefault();
      return handleArrowUpKeyDown();
    }

    if (keyValue === 'ArrowDown') {
      event.preventDefault();
      return handleArrowDownKeyDown();
    }

    if (keyValue === 'Backspace') return handleBackspaceKeyDown();

    return handleUnknownKeyDown(keyValue);
  };

  return (
    <div
      id="terminal-input"
      className="mt-8 mb-4 focus-within:outline-dashed outline-offset-4 outline-2 outline-green-700"
      onFocus={() => terminalInputRef.current?.focus()}
      tabIndex={0}
    >
      <TerminalLine
        as="div"
        animation="STANDARD"
        classNameOverrides="break-all"
      >
        <input
          ref={terminalInputRef}
          className="peer sr-only"
          value={terminalInput}
          onChange={() => null}
          onKeyDown={handleOnKeyDown}
          aria-label="Type a command into the terminal"
        />
        {getFilePath(user)}&nbsp;{terminalInput}
        <span className="opacity-0 peer-focus:opacity-100 peer-focus:animate-cursor transition-opacity">
          _
        </span>
      </TerminalLine>
    </div>
  );
};
