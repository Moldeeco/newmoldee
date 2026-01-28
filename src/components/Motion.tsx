'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

// FadeIn component for smooth entrance
interface FadeInProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({ children, delay = 0, direction = 'up', className, ...props }: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: {}
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// StaggerContainer for lists
interface StaggerContainerProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    staggerDelay?: number;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className, ...props }: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// StaggerItem to be used inside StaggerContainer
export function StaggerItem({ children, className, ...props }: { children: ReactNode } & HTMLMotionProps<'div'>) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
