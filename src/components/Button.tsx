import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all shadow-md text-sm md:text-base",
        variant === 'primary' && "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-pink-200/50 hover:opacity-95",
        variant === 'secondary' && "bg-white text-rose-500 border border-rose-200 hover:bg-rose-50",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}