'use client';
import { motion } from "framer-motion";
import { Car, Mail, Phone } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 px-6 bg-dark text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center overflow-hidden">
                                <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-semibold">Professional Drivers</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Your trusted companion for safe, reliable, and professional driving services
                            across one-way trips, round trips, and outstation journeys.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>
                                <a href="#how-it-works" className="hover:text-accent transition-colors">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#trip-types" className="hover:text-accent transition-colors">
                                    Trip Types
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    Safety
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-accent" />
                                <a href="mailto:prodrivers1981@gmail.com" className="hover:text-accent transition-colors">
                                    prodrivers1981@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-accent" />
                                <a href="tel:+919505131027" className="hover:text-accent transition-colors">
                                    +91 95051 31027
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
                    <p>© {currentYear} Professional Drivers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
