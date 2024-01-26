import { useContext } from 'react';

import confetti from 'canvas-confetti';

import { AnimationContext } from '@/context';

export const useConfettiAnimation = () => {
  const { isAnimationsEnabled } = useContext(AnimationContext);

  const handleConfetti = () => {
    if (!isAnimationsEnabled) return;

    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      shapes: ['circle', 'square', 'star'],
      origin: { x: 0 },
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      shapes: ['circle', 'square', 'star'],
      origin: { x: 1 },
    });
  };

  return { handleConfetti };
};
