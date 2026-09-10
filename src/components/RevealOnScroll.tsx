import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  viewportMargin?: string;
  viewportAmount?: number | 'some' | 'all';
  once?: boolean;
  id?: string;
}

/**
 * RevealOnScroll
 * Smooth, premium scroll-triggered reveal animation using Framer Motion.
 * Features an organic cubic-bezier deceleration curve and accessible reduced motion support.
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 28,
  xOffset = 0,
  scale = 1,
  viewportMargin = '0px 0px -40px 0px',
  viewportAmount = 0.12,
  once = true,
  id
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ 
        opacity: 0, 
        y: yOffset, 
        x: xOffset,
        scale: scale !== 1 ? scale : 1 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1 
      }}
      viewport={{ 
        once, 
        margin: viewportMargin,
        amount: viewportAmount
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Fluid, high-end agency deceleration curve
      }}
    >
      {children}
    </motion.div>
  );
};

export interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
  id?: string;
}

/**
 * RevealGroup
 * Coordinates staggered reveals for grids of cards or child items.
 */
export const RevealGroup: React.FC<RevealGroupProps> = ({
  children,
  className = '',
  staggerDelay = 0.08,
  viewportMargin = '0px 0px -40px 0px',
  id
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}

export const RevealItem: React.FC<RevealItemProps> = ({
  children,
  className = '',
  yOffset = 24,
  duration = 0.55
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
