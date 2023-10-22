import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { UnknownStrInput, User } from '@/types';

import { CONGRATS_MESSAGES } from '@/constants';

export const arrIncludes = <T>(array: readonly T[], x: any): x is T => {
  return array.includes(x);
};

type RecordKey = string | number | symbol;
export const getKeyByValue = <T extends Record<RecordKey, unknown>>(
  object: T,
  value: T[keyof T],
): keyof T => {
  return Object.keys(object).find((key) => object[key] === value) as keyof T;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const pickRandomFromArr = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getCongratsMessage = () => {
  return pickRandomFromArr(Object.values(CONGRATS_MESSAGES));
};

// For now this will always be static, but may add dynamic file paths in the future
export const getFilePath = (user: User) => {
  return `C:\\Users\\${user}>` as const;
};

// We can only handle one arguement at the moment as this treats the `split(' ')[1]` as the only argument
export const determineCommandAndArgument = (i: UnknownStrInput) => {
  const command = i.split(' ')[0];
  const argument = i.split(' ').slice(1).join(' ');

  return { command, argument };
};

export const extractNameFromRelativePath = (
  relativePath: string | undefined,
) => {
  if (relativePath == null) return null;

  if (RegExp('../.+').test(relativePath)) {
    const name = relativePath.slice(3);

    return name;
  }

  return null;
};
