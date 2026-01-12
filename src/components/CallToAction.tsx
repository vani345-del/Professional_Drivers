'use client';
import { motion } from "framer-motion";

const CallToAction = () => {
    return (
        <section className="py-24 px-6 bg-accent">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to travel stress-free?
                    </h2>
                    <p className="text-lg text-white/90 mb-10 leading-relaxed">
                        Download Professional Drivers on Google Play today and experience
                        the safest, most convenient way to travel.
                    </p>

                    <motion.a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play"
                            className="h-20 mx-auto drop-shadow-lg"
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
