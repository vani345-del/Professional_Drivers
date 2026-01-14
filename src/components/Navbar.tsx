'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Menu, X, Phone } from "lucide-react";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Trip Types", href: "#trip-types" },
    { label: "Why Us", href: "#why-choose" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-sm overflow-hidden">
                            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-bold text-dark hidden sm:block tracking-tight">
                            Professional Drivers
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-dark/70 hover:text-accent transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="tel:+911234567890" className="flex items-center gap-2 text-dark font-medium hover:text-accent transition-colors">
                            <Phone className="w-5 h-5 text-accent" />
                            <span>+91 12345 67890</span>
                        </a>

                        <motion.a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-white text-sm font-semibold py-3 px-6 rounded-full shadow-soft hover:shadow-pop transition-all inline-block"
                        >
                            Download App
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors text-dark"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-4 border-t border-dark/5 mt-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-base font-medium text-dark/70 hover:text-accent transition-colors px-2"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="tel:+911234567890"
                                    className="flex items-center gap-2 text-dark font-medium hover:text-accent transition-colors px-2 py-2"
                                >
                                    <Phone className="w-5 h-5 text-accent" />
                                    <span>+91 12345 67890</span>
                                </a>
                                <a
                                    href="https://play.google.com/store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-accent text-white text-center text-sm font-semibold py-3 px-6 rounded-xl hover:bg-accent/90 transition-all mt-4"
                                >
                                    Download App
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
