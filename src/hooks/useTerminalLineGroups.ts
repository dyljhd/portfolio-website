import { useContext, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
  AchievementName,
  Argument,
  Command,
  CommandWithArgument,
  EasterEggName,
  ITerminalAchievementLineGroup,
  ITerminalCommandLineGroup,
  ITerminalLineGroupsState,
  MainCommand,
  StandardCommand,
  TerminalLineGroup,
  UnknownCommand,
  UnknownStrInput,
  User,
} from '@/types';

import {
  COMMANDS,
  EASTER_EGG_COMMANDS,
  EASTER_EGG_NAMES,
  MAIN_COMMANDS,
} from '@/constants';

import { AchievementContext, EasterEggContext, UserContext } from '@/context';

import {
  arrIncludes,
  determineCommandAndArgument,
  extractNameFromRelativePath,
  getCongratsMessage,
  getFilePath,
  getKeyByValue,
} from '@/utils';

interface IStandardHandleCommand {
  trigger: 'STANDARD';
  input: UnknownStrInput;
}
interface IManualHandleCommand {
  trigger: 'MANUAL';
  input: Command | CommandWithArgument;
}
export type HandleCommand = IStandardHandleCommand | IManualHandleCommand;

const initialState: ITerminalLineGroupsState = {
  commands: [],
  groups: [],
};

export type TerminalLineGroupsAction =
  | {
      type: 'EXECUTE_COMMAND';
      trigger: 'STANDARD' | 'MANUAL';
      user: User;
      command: UnknownCommand;
      argument: Argument;
    }
  | {
      type: 'EXECUTE_EASTER_EGG';
      name: EasterEggName;
      user: User;
      command?: UnknownCommand;
      argument?: Argument;
      isAlreadyFound: boolean;
      shouldDisplay: boolean;
    }
  | {
      type: 'EXECUTE_ACHIEVEMENT';
      name: AchievementName;
      user: User;
      command?: UnknownCommand;
      argument?: Argument;
      isAlreadyFound: boolean;
      shouldDisplay: boolean;
    }
  | { type: 'ADD_MAIN_COMMAND'; command: MainCommand }
  | { type: 'FLUSH_TERMINAL_LINE_GROUPS'; amountOfGroups: 'ALL' | number };

const reducer = (
  state: ITerminalLineGroupsState,
  action: TerminalLineGroupsAction,
): ITerminalLineGroupsState => {
  const handleAddNewTerminalLineGroup = (
    newTerminalLineGroup: TerminalLineGroup,
  ) => {
    return {
      ...state,
      groups: [...state.groups, newTerminalLineGroup],
    } satisfies ITerminalLineGroupsState;
  };

  switch (action.type) {
    case 'EXECUTE_COMMAND': {
      const user = action.user;

      const common = {
        key: uuidv4(),
        user,
        filePath: `C:\\Users\\${user}>`,
        type: 'COMMAND',
        command: action.command,
        argument: action.argument,
        metadata: { shouldShowCommand: action.trigger === 'STANDARD' },
        events: { shouldScrollToBottom: true },
      } as const satisfies Partial<ITerminalCommandLineGroup>;

      switch (action.command) {
        case COMMANDS.ABOUT: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'ABOUT',
          });
        }
        case COMMANDS.EXPERIENCE: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'EXPERIENCE',
          });
        }
        case COMMANDS.GOALS: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'GOALS',
          });
        }
        case COMMANDS.PROJECTS: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'PROJECTS',
            events: { ...common.events, shouldScrollToBottom: false },
          });
        }
        case COMMANDS.CONTACT: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'CONTACT',
          });
        }
        case COMMANDS.CV: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'CV',
          });
        }
        case COMMANDS.HELP: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'HELP',
          });
        }
        default: {
          return handleAddNewTerminalLineGroup({
            ...common,
            name: 'NOT_RECOGNIZED',
          });
        }
      }
    }
    case 'EXECUTE_EASTER_EGG': {
      const user = action.user;

      return handleAddNewTerminalLineGroup({
        key: uuidv4(),
        user,
        filePath: getFilePath(user),
        type: 'EASTER_EGG',
        name: action.name,
        command: action.command ?? '',
        argument: action.argument ?? '',
        metadata: {
          shouldDisplay: action.shouldDisplay,
          shouldShowCommand: action.command != null,
          isAlreadyFound: action.isAlreadyFound,
          congratsMessage: getCongratsMessage(),
        },
        events: { shouldScrollToBottom: true },
      });
    }
    case 'EXECUTE_ACHIEVEMENT': {
      const user = action.user;
      const isAlreadyFound = action.isAlreadyFound;

      const common = {
        key: uuidv4(),
        user,
        filePath: getFilePath(user),
        type: 'ACHIEVEMENT',
        name: action.name,
        command: action.command ?? '',
        argument: action.argument ?? '',
        metadata: {
          shouldDisplay: action.shouldDisplay,
          shouldShowCommand: action.command != null,
          isAlreadyFound,
          congratsMessage: getCongratsMessage(),
        },
        events: { shouldScrollToBottom: true },
      } as const satisfies Partial<ITerminalAchievementLineGroup>;

      switch (action.name) {
        case 'ROCKET': {
          return handleAddNewTerminalLineGroup({
            ...common,
            events: { ...common.events, shouldScrollToBottom: !isAlreadyFound },
          });
        }
        default: {
          return handleAddNewTerminalLineGroup({
            ...common,
          });
        }
      }
    }
    case 'ADD_MAIN_COMMAND': {
      return {
        ...state,
        commands: [...state.commands, action.command],
      };
    }
    case 'FLUSH_TERMINAL_LINE_GROUPS': {
      const amountOfGroups = action.amountOfGroups;

      if (amountOfGroups === 'ALL') {
        return {
          ...state,
          groups: initialState.groups,
        };
      }

      const flushedTerminalLineGroups = [...state.groups];
      flushedTerminalLineGroups.splice(0, amountOfGroups);

      return {
        ...state,
        groups: flushedTerminalLineGroups,
      };
    }
  }
};

export const useTerminalLineGroups = () => {
  const { user, handleUserChange } = useContext(UserContext);
  const {
    handleEasterEggFound,
    isEasterEggAlreadyFound,
    shouldDisplayEasterEgg,
  } = useContext(EasterEggContext);
  const {
    handleAchievementFound,
    isAchievementAlreadyFound,
    shouldDisplayAchievement,
  } = useContext(AchievementContext);

  const [terminalLineGroups, dispatch] = useReducer(reducer, initialState);

  const handleFlushTerminalLineGroupsForPerformance = () => {
    if (terminalLineGroups.groups.length > 10) {
      dispatch({ type: 'FLUSH_TERMINAL_LINE_GROUPS', amountOfGroups: 1 });
    }
  };

  const handleMainCommandsFound = (command: UnknownCommand) => {
    const isMainCommand = (
      command: MainCommand | StandardCommand | UnknownCommand,
    ): command is MainCommand => {
      return arrIncludes(Object.values(MAIN_COMMANDS), command);
    };

    if (isMainCommand(command)) {
      const isCommandAlreadyEntered =
        terminalLineGroups.commands.includes(command);
      const isLastCommandToBeEntered =
        !isCommandAlreadyEntered &&
        Object.keys(MAIN_COMMANDS).length - 1 ===
          terminalLineGroups.commands.length;

      dispatch({ type: 'ADD_MAIN_COMMAND', command });

      if (isLastCommandToBeEntered) {
        handleAchievement({ name: 'ALL_MAIN_COMMANDS' });
      }
    }
  };

  const handleCommand = ({ trigger, input }: HandleCommand) => {
    const { command, argument } = determineCommandAndArgument(input);

    const metadata: Record<string | number | symbol, unknown> = {};

    easterEggCondition: if (
      arrIncludes(Object.values(EASTER_EGG_COMMANDS), command)
    ) {
      const name = getKeyByValue(EASTER_EGG_COMMANDS, command);

      if (name === EASTER_EGG_NAMES.CHANGE_USER_DIR) {
        const user = extractNameFromRelativePath(argument);

        if (user == null) break easterEggCondition;

        metadata.user = user;
      }

      return handleEasterEgg({
        name,
        command,
        argument,
        metadata,
      });
    }

    // At the moment there are no achievements that can currently be triggered by commands
    // if (arrIncludes(Object.values(ACHIEVEMENT_COMMANDS), command)) {
    //   return handleAchievement(getKeyByValue(ACHIEVEMENT_COMMANDS, command));
    // }

    if (command === COMMANDS.CLEAR) {
      return dispatch({
        type: 'FLUSH_TERMINAL_LINE_GROUPS',
        amountOfGroups: 'ALL',
      });
    }

    handleFlushTerminalLineGroupsForPerformance();

    dispatch({
      type: 'EXECUTE_COMMAND',
      trigger,
      user,
      command,
      argument,
    });

    // This is executed here so that it is shown under the main command output
    if (!arrIncludes(Object.values(COMMANDS), command)) {
      handleEasterEgg({
        name: 'WRONG_COMMAND',
      });
    }

    handleMainCommandsFound(command);
  };

  const handleEasterEgg = ({
    name,
    command,
    argument,
    metadata,
  }: {
    name: EasterEggName;
    command?: UnknownCommand;
    argument?: Argument;
    metadata?: Record<string | number | symbol, unknown>;
  }) => {
    handleFlushTerminalLineGroupsForPerformance();

    const isAlreadyFound = isEasterEggAlreadyFound(name);
    const shouldDisplay = shouldDisplayEasterEgg(name);

    handleEasterEggFound(name);

    if (name === EASTER_EGG_NAMES.CHANGE_USER_DIR) {
      // If this condition is `true` then there is something wrong with the logic for `EASTER_EGG_NAMES.CHANGE_USER_DIR`
      // prettier-ignore
      if (!(metadata != null && 'user' in metadata && typeof metadata.user === 'string')) return;

      handleUserChange(metadata.user);
    }

    dispatch({
      type: 'EXECUTE_EASTER_EGG',
      user,
      name,
      command,
      argument,
      isAlreadyFound,
      shouldDisplay,
    });
  };

  const handleAchievement = ({
    name,
    command,
    argument,
  }: {
    name: AchievementName;
    command?: UnknownCommand;
    argument?: Argument;
  }) => {
    handleFlushTerminalLineGroupsForPerformance();

    const isAlreadyFound = isAchievementAlreadyFound(name);
    const shouldDisplay = shouldDisplayAchievement(name);

    handleAchievementFound(name);

    dispatch({
      type: 'EXECUTE_ACHIEVEMENT',
      user,
      name,
      command,
      argument,
      isAlreadyFound,
      shouldDisplay,
    });
  };

  return {
    terminalLineGroups,
    handleCommand,
    handleEasterEgg,
    handleAchievement,
  };
};
