import { cn } from '@/utils';

interface ITerminalIconProps {
  src: string;
  size?: 'SMALL' | 'BASE';
}

export const TerminalIcon = ({ src, size = 'BASE' }: ITerminalIconProps) => {
  return (
    <>
      &nbsp;
      <img
        src={src}
        className={cn(
          'inline-block',
          size === 'SMALL' && 'w-6 h-6',
          size === 'BASE' && 'w-8 h-8',
        )}
        draggable={false}
      />
    </>
  );
};
