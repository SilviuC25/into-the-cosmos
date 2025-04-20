'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

const baseClasses =
  'inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-2xl transition-colors duration-300 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<string, string> = {
  primary: 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg',
  secondary: 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-100',
  ghost: 'bg-transparent text-blue-700 hover:bg-blue-100',
};

const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
  const combinedClassName = `${baseClasses} ${variants[variant] || ''} ${className}`;

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      className={combinedClassName.trim()}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
