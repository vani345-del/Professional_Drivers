'use client';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
    return (
        <motion.a
            href="tel:+911234567890"
            className="fixed bottom-6 right-6 z-50 bg-dark hover:bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            aria-label="Call Now"
            initial={{ scale: 1 }}
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1, y: 0 }}
        >
            <Phone size={24} />
        </motion.a>
    );
}
