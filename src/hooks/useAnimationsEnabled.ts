import { useState } from 'react';

export const useAnimationsEnabled = () => {
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(false);
  const [
    isInitialAnimationsWarningAccepted,
    setIsInitialAnimationsWarningAccepted,
  ] = useState(false);

  const handleToggleAnimationsEnabled = () => {
    setIsAnimationsEnabled((prev) => !prev);
  };

  const handleAcceptInitialAnimationsWarning = () => {
    setIsInitialAnimationsWarningAccepted(true);
  };

  return {
    isAnimationsEnabled,
    setIsAnimationsEnabled,
    isInitialAnimationsWarningAccepted,
    setIsInitialAnimationsWarningAccepted,
    handleToggleAnimationsEnabled,
    handleAcceptInitialAnimationsWarning,
  };
};
