import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedReveal({ children, delay = 0 }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}