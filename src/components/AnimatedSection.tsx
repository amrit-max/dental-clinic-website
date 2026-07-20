import React from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  id?: string;
  key?: React.Key;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  id
}: AnimatedSectionProps) {
  const getVariants = () => {
    if (direction === 'none') {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, delay, ease: 'easeOut' } }
      };
    }

    const offsets = {
      up: { y: 24 },
      down: { y: -24 },
      left: { x: 24 },
      right: { x: -24 }
    };

    return {
      hidden: { opacity: 0, ...offsets[direction] },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } // Custom elegant easeOutExpo curve
      }
    };
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
