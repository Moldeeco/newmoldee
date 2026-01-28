'use client';

import { motion } from 'framer-motion';

interface PrintingTextProps {
    text: string;
    className?: string;
}

export default function PrintingText({ text, className = '' }: PrintingTextProps) {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* Ghost/Blueprint Text */}
            <span className="opacity-20 select-none text-gray-500/30" aria-hidden="true">
                {text}
            </span>

            {/* Revealed Text Container */}
            <motion.div
                className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap text-foreground"
                initial={{ height: '0%' }}
                animate={{ height: '100%' }}
                transition={{
                    duration: 2.5,
                    ease: [0.45, 0.05, 0.55, 0.95], // Mechanical ease
                    delay: 0.5,
                }}
            >
                <span className="absolute bottom-0 left-0 w-full">{text}</span>
            </motion.div>

            {/* Scanning/Printing Line */}
            <motion.div
                className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_var(--primary)] z-10"
                initial={{ bottom: '0%', opacity: 1 }}
                animate={{
                    bottom: '100%',
                    opacity: [1, 1, 0] // Fade out at the very end
                }}
                transition={{
                    duration: 2.5,
                    ease: [0.45, 0.05, 0.55, 0.95],
                    delay: 0.5,
                    times: [0, 0.9, 1]
                }}
            />
        </div>
    );
}
