import { AchievementName, EasterEggName } from '@/types';

export const MAIN_COMMANDS = {
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  GOALS: 'goals',
  CONTACT: 'contact',
  CV: 'cv',
} as const;

export const STANDARD_COMMANDS = {
  ...MAIN_COMMANDS,
  HELP: 'help',
  CLEAR: 'clear',
} as const;

export const EASTER_EGG_COMMANDS = {
  HELLO_WORLD: 'helloworld',
  CHANGE_USER_DIR: 'cd',
} as const satisfies Partial<Record<EasterEggName, string>>;

export const ACHIEVEMENT_COMMANDS = {} as const satisfies Partial<
  Record<AchievementName, string>
>;

export const COMMANDS = {
  ...STANDARD_COMMANDS,
  ...EASTER_EGG_COMMANDS,
  ...ACHIEVEMENT_COMMANDS,
} as const;

export const STANDARD_NAMES = {
  ABOUT: 'ABOUT',
  EXPERIENCE: 'EXPERIENCE',
  PROJECTS: 'PROJECTS',
  GOALS: 'GOALS',
  CV: 'CV',
  CONTACT: 'CONTACT',
  NOT_RECOGNIZED: 'NOT_RECOGNIZED',
  HELP: 'HELP',
} as const;

export const EASTER_EGG_NAMES = {
  RUFUS: 'RUFUS',
  HELLO_WORLD: 'HELLO_WORLD',
  CHANGE_USER_DIR: 'CHANGE_USER_DIR',
} as const;

export const EASTER_EGG_ONE_TIME_SHOW = {
  RUFUS: false,
  HELLO_WORLD: false,
  CHANGE_USER_DIR: false,
} as const satisfies Record<EasterEggName, boolean>;

export const ACHIEVEMENT_NAMES = {
  ROCKET: 'ROCKET',
  DISABLE_ANIMATIONS: 'DISABLE_ANIMATIONS',
  COMMAND_HISTORY: 'COMMAND_HISTORY',
  ALL_MAIN_COMMANDS: 'ALL_MAIN_COMMANDS',
} as const;

export const ACHIEVEMENT_ONE_TIME_SHOW = {
  ROCKET: true,
  DISABLE_ANIMATIONS: true,
  COMMAND_HISTORY: true,
  ALL_MAIN_COMMANDS: true,
} as const satisfies Record<AchievementName, boolean>;

export const CONGRATS_MESSAGES = {
  GOOD_JOB: 'Good job',
  AWESOME: 'Awesome',
  NICE_WORK: 'Nice work',
} as const;
