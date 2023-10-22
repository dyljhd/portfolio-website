import { createContext } from 'react';

import { GetUserFirstNameVariant, User } from '@/types';

interface IUserContext {
  user: User;
  handleUserChange: (user: string) => void;
  getUserFirstName: ({
    variant,
  }: {
    variant: GetUserFirstNameVariant;
  }) => string;
}

export const UserContext = createContext<IUserContext>({
  user: 'Dylan Delorie',
  handleUserChange: () => null,
  getUserFirstName: () => 'Dylan',
});
