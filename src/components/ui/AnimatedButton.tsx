
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  hoverScale?: boolean;
  hoverElevate?: boolean;
  ripple?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = 'default', size = 'default', className, hoverScale = true, hoverElevate = true, ripple = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'relative overflow-hidden transition-all duration-300 ease-out',
          hoverScale && 'hover:scale-[1.02] active:scale-[0.98]',
          hoverElevate && 'hover:shadow-md',
          className
        )}
        {...props}
      >
        {ripple && (
          <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <span className="ripple-effect"></span>
          </span>
        )}
        {children}
      </Button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };
