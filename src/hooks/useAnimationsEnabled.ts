import { useState } from 'react';

export const useAnimationsEnabled = () => {
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true);

  const handleToggleAnimationsEnabled = () => {
    setIsAnimationsEnabled((prev) => !prev);
  };

  return {
    isAnimationsEnabled,
    setIsAnimationsEnabled,
    handleToggleAnimationsEnabled,
  };
};
