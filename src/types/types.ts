import {
  ACHIEVEMENT_COMMANDS,
  ACHIEVEMENT_NAMES,
  COMMANDS,
  CONGRATS_MESSAGES,
  EASTER_EGG_COMMANDS,
  EASTER_EGG_NAMES,
  MAIN_COMMANDS,
  STANDARD_COMMANDS,
  STANDARD_NAMES,
} from '@/constants';

export type Noop = () => void;
export type UUID = string;
export type User = string;
export type FilePath = `C:\\Users\\${User}>`;
export type UnknownCommand = string;
export type UnknownStrInput = string;
export type Argument = string;

export type MainCommands = typeof MAIN_COMMANDS;
export type MainCommand = MainCommands[keyof MainCommands];

export type StandardCommands = typeof STANDARD_COMMANDS;
export type StandardCommand = StandardCommands[keyof StandardCommands];
export type StandardNames = typeof STANDARD_NAMES;
export type StandardName = StandardNames[keyof StandardNames];

export type EasterEggCommands = typeof EASTER_EGG_COMMANDS;
export type EasterEggCommand = EasterEggCommands[keyof EasterEggCommands];
export type EasterEggNames = typeof EASTER_EGG_NAMES;
export type EasterEggName = EasterEggNames[keyof EasterEggNames];

export type AchievementCommands = typeof ACHIEVEMENT_COMMANDS;
export type AchievementCommand = AchievementCommands[keyof AchievementCommands];
export type AchievementNames = typeof ACHIEVEMENT_NAMES;
export type AchievementName = AchievementNames[keyof AchievementNames];

export type Commands = typeof COMMANDS;
export type Command = Commands[keyof Commands];
export type CommandWithArgument = `${Command} ${Argument}`;

export type CongratsMessages = typeof CONGRATS_MESSAGES;
export type CongratsMessage = CongratsMessages[keyof CongratsMessages];

export interface ITerminalCommandLineGroup {
  key: UUID;
  user: User;
  filePath: FilePath;
  type: 'COMMAND';
  name: StandardName;
  command: UnknownCommand;
  argument: Argument;
  metadata: { shouldShowCommand: boolean };
  events: { shouldScrollToBottom?: boolean };
}
export interface ITerminalAchievementLineGroup {
  key: UUID;
  user: User;
  filePath: FilePath;
  type: 'ACHIEVEMENT';
  name: AchievementName;
  command: UnknownCommand;
  argument: Argument;
  metadata: {
    shouldDisplay: boolean;
    shouldShowCommand: boolean;
    isAlreadyFound: boolean;
    congratsMessage: CongratsMessage;
  };
  events: { shouldScrollToBottom?: boolean };
}
export interface ITerminalEasterEggLineGroup {
  key: UUID;
  user: User;
  filePath: FilePath;
  type: 'EASTER_EGG';
  name: EasterEggName;
  command: UnknownCommand;
  argument: Argument;
  metadata: {
    shouldDisplay: boolean;
    shouldShowCommand: boolean;
    isAlreadyFound: boolean;
    congratsMessage: CongratsMessage;
  };
  events: { shouldScrollToBottom?: boolean };
}
export type TerminalLineGroup =
  | ITerminalCommandLineGroup
  | ITerminalAchievementLineGroup
  | ITerminalEasterEggLineGroup;

export type TerminalLineGroups = TerminalLineGroup[];

export interface ITerminalLineGroupsState {
  commands: MainCommand[];
  groups: TerminalLineGroups;
}

export type GetUserFirstNameVariant = 'PLAIN' | 'POSSESSIVE';
