import { ReactNode } from 'react'


export interface FloatingElementProps {
  position: 'left' | 'right' | 'top-left' | 'bottom-right';
  children: React.ReactNode;
  className?: string;
}