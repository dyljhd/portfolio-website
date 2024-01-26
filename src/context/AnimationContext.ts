import { createContext } from 'react';

import { Noop } from '@/types';

interface IAnimationContext {
  isAnimationsEnabled: boolean;
  isInitialAnimationsWarningAccepted: boolean;
  handleToggleAnimationsEnabled: Noop;
  handleAcceptInitialAnimationsWarning: Noop;
}

export const AnimationContext = createContext<IAnimationContext>({
  isAnimationsEnabled: false,
  isInitialAnimationsWarningAccepted: false,
  handleToggleAnimationsEnabled: () => null,
  handleAcceptInitialAnimationsWarning: () => true,
});
