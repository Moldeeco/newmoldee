'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
            >
                <LayoutRouterContext.Provider value={frozen}>
                    {children}
                </LayoutRouterContext.Provider>
            </motion.div>
        </AnimatePresence>
    );
}
