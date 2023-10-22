import { PropsWithChildren } from 'react';

import { cn } from '@/utils';

interface ITerminalLineContainerProps {
  gap?: 'SMALL' | 'BASE' | 'LARGE';
}

export const TerminalLineContainer = ({
  gap = 'BASE',
  children,
}: PropsWithChildren<ITerminalLineContainerProps>) => {
  return (
    <div
      className={cn(
        'flex flex-col',
        gap === 'SMALL' && 'gap-1.5',
        gap === 'BASE' && 'gap-2',
        gap === 'LARGE' && 'gap-2.5',
      )}
    >
      {children}
    </div>
  );
};
