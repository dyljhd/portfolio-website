import { PropsWithChildren, useContext } from 'react';

import { AnimationContext } from '@/context';

import { cn } from '@/utils';

export const TerminalTagContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export const TerminalTag = ({ children }: PropsWithChildren) => {
  const { isAnimationsEnabled } = useContext(AnimationContext);

  return (
    <div
      className={cn(
        'px-2 py-1 bg-transparent text-white font-console text-xs font-normal border-green-700 hover:bg-green-800 border rounded-md w-max select-none',
        isAnimationsEnabled && 'animate-glow_flicker_alt',
      )}
    >
      {children}
    </div>
  );
};
