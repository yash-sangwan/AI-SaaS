import { FloatingElementProps } from './Types'

export function FloatingElement({ position, children, className = '' }: FloatingElementProps) {
  const positionClasses = {
    'left': 'left-8 lg:left-16 top-32',
    'right': 'right-8 lg:right-16 top-32',
    'top-left': 'left-8 lg:left-16 top-24',
    'bottom-right': 'right-8 lg:right-16 bottom-24',
  }

  const animationClasses = {
    'left': 'animate-float-left',
    'right': 'animate-float-right',
    'top-left': 'animate-float-top-left',
    'bottom-right': 'animate-float-bottom-right',
  }

  return (
    <div
      className={`
        absolute 
        ${positionClasses[position]} 
        ${animationClasses[position]}
        hidden rounded-2xl border border-white/10 bg-white/5 
        px-6 py-3 backdrop-blur-sm 
        transition-transform hover:scale-105 
        lg:block 
        ${className}
      `}
    >
      {children}
    </div>
  )
}