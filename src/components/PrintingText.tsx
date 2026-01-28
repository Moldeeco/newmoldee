'use client';

import { motion } from 'framer-motion';

interface PrintingTextProps {
    text: string;
    className?: string;
}

export default function PrintingText({ text, className = '' }: PrintingTextProps) {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* Invisible Spacer (defines size) */}
            <span className="opacity-0 select-none" aria-hidden="true">
                {text}
            </span>

            {/* Revealed Text Container */}
            <motion.div
                className="absolute inset-0 top-0 left-0 w-full text-foreground"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{
                    duration: 2.0,
                    ease: "linear",
                    delay: 0.2,
                }}
            >
                {text}
            </motion.div>

            {/* Scanning/Printing Line */}
            <motion.div
                className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_var(--primary)] z-10"
                initial={{ top: '100%', opacity: 1 }}
                animate={{
                    top: '0%',
                    opacity: [1, 1, 0]
                }}
                transition={{
                    duration: 2.0,
                    ease: "linear",
                    delay: 0.2,
                    times: [0, 0.9, 1]
                }}
            />
        </div>
    );
}
