'use client';
import { motion } from 'framer-motion';
// Removed Image and Play imports as they are not used in the new component

const Hero = () => {
    return (
        <section className="px-padding py-20 lg:py-32 bg-white min-h-[85vh] flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6 text-balance leading-[1.1] tracking-tight">
                            Professional Drivers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#c25e31]">Every Journey</span>
                        </h1>
                        <p className="text-lg text-dark/70 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Book trusted drivers for one-way trips, round trips, and outstation journeys.
                            Your safety and comfort is our priority.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <motion.a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="h-14 w-auto mx-auto lg:mx-0 drop-shadow-md hover:drop-shadow-xl transition-all"
                                />
                            </motion.a>

                            <motion.a
                                href="#how-it-works"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 font-semibold text-dark bg-white border border-dark/10 rounded-[12px] hover:bg-white/50 transition-all shadow-sm h-14 flex items-center"
                            >
                                How it Works
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative">
                            <img
                                src="/images/herosection.png"
                                alt="Professional driver with customer and car"
                                className="w-full max-w-xl mx-auto rounded-card shadow-soft"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
                            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
