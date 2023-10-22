import { PropsWithChildren, useContext } from 'react';

import { AnimationContext } from '@/context';

import { cn } from '@/utils';

interface ITerminalLineProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'HEADING' | 'SUBHEADING' | 'LINE';
  animation?: 'STANDARD' | 'ALT' | 'GOLD' | 'RED';
  classNameOverrides?: string;
  isInTabOrder?: boolean;
}

export const TerminalLine = ({
  as: Tag = 'p',
  variant = 'LINE',
  animation = variant === 'HEADING' ? 'STANDARD' : 'ALT',
  classNameOverrides,
  isInTabOrder = false,
  children,
  ...props
}: PropsWithChildren<ITerminalLineProps>) => {
  const { isAnimationsEnabled } = useContext(AnimationContext);

  return (
    <Tag
      className={cn(
        'text-white font-console',
        variant === 'HEADING' && 'font-semibold text-base',
        variant === 'SUBHEADING' && 'font-medium text-sm',
        variant === 'LINE' && 'font-light text-sm',
        isAnimationsEnabled &&
          animation === 'STANDARD' &&
          'animate-glow_flicker',
        isAnimationsEnabled &&
          animation === 'ALT' &&
          'animate-glow_flicker_alt',
        isAnimationsEnabled &&
          animation === 'GOLD' &&
          'animate-glow_flicker_gold',
        isAnimationsEnabled &&
          animation === 'RED' &&
          'animate-glow_flicker_red',
        isInTabOrder &&
          'focus:outline-dashed outline-offset-4 outline-2 outline-green-700',
        classNameOverrides,
      )}
      tabIndex={isInTabOrder ? 0 : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};
