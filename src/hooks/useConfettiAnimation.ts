import confetti from 'canvas-confetti';

export const useConfettiAnimation = () => {
  const handleConfetti = () => {
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
