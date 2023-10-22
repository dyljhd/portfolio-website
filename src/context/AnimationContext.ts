import { createContext } from 'react';

interface IAnimationContext {
  isAnimationsEnabled: boolean;
  handleToggleAnimationsEnabled: () => void;
}

export const AnimationContext = createContext<IAnimationContext>({
  isAnimationsEnabled: true,
  handleToggleAnimationsEnabled: () => null,
});
