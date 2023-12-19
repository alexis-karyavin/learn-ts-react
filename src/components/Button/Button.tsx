import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: string;
}

function Button({ children, className, size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.buttonXl]: size === 'xl',
        [styles.buttonMd]: size === 'md'
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
