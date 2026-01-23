
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedUnderlineProps {
  className?: string;
}

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ className }) => {
  return (
    <div className={cn("h-[3px] w-0 bg-folk-purple animate-line-expand", className)} />
  );
};

export default AnimatedUnderline;
