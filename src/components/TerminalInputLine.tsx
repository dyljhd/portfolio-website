import {
  ChangeEvent,
  ElementRef,
  KeyboardEvent,
  useContext,
  useRef,
  useState,
} from 'react';

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
  const [cursorPosition, setCursorPosition] = useState(0);
  const [curHistoryCommandId, setCurHistoryCommandId] = useState<string | null>(
    null,
  );

  const handleEnterKeyDown = () => {
    handleCommand({ trigger: 'STANDARD', input: terminalInput });
    setCurHistoryCommandId(null);
    setTerminalInput('');
    setCursorPosition(0);
    // terminalInputRef.current?.blur();
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

    const newTerminalInput = `${prev.command}${
      prev.argument.length > 0 ? ` ${prev.argument}` : ''
    }`;

    handleAchievement({ name: 'COMMAND_HISTORY' });
    setCurHistoryCommandId(prev.key);
    setTerminalInput(newTerminalInput);
    setCursorPosition(newTerminalInput.length);
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

    if (next == null) return;

    const newTerminalInput = `${next.command}${
      next.argument.length > 0 ? ` ${next.argument}` : ''
    }`;

    setCurHistoryCommandId(next.key);
    setTerminalInput(newTerminalInput);
    setCursorPosition(newTerminalInput.length);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurHistoryCommandId(null);
    setTerminalInput(event.target.value);
    setCursorPosition(event.target.selectionStart ?? 0);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    setCursorPosition(event.currentTarget.selectionStart ?? 0);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key;

    if (keyValue === 'ArrowDown') {
      event.preventDefault();
      return handleArrowDownKeyDown();
    }

    if (keyValue === 'ArrowUp') {
      event.preventDefault();
      return handleArrowUpKeyDown();
    }

    if (keyValue === 'Enter') {
      return handleEnterKeyDown();
    }
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
          className="peer sr-only text-black"
          value={terminalInput}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onKeyUp={handleKeyUp}
          aria-label="Type a command into the terminal"
        />
        {getFilePath(user)}&nbsp;
        {terminalInput.substring(0, cursorPosition)}
        <span className="opacity-0 peer-focus:opacity-100 peer-focus:animate-cursor transition-opacity">
          _
        </span>
        {terminalInput.substring(cursorPosition)}
      </TerminalLine>
    </div>
  );
};
