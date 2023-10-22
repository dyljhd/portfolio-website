import { useState } from 'react';

import { GetUserFirstNameVariant } from '@/types';

export const useUser = () => {
  const [user, setUser] = useState<string>('Dylan Delorie');

  const handleUserChange = (name: string) => setUser(name);

  const getUserFirstName = ({
    variant,
  }: {
    variant: GetUserFirstNameVariant;
  }) => {
    const firstname = user.split(' ')[0];

    if (variant === 'POSSESSIVE') {
      if (firstname.charAt(firstname.length - 1).toLowerCase() === 's')
        return `${firstname}'`;
      return `${firstname}'s`;
    }

    return firstname;
  };

  return {
    user,
    setUser,
    handleUserChange,
    getUserFirstName,
  };
};
