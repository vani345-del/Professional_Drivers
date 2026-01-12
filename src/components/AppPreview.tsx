'use client';
import { motion } from "framer-motion";

const AppPreview = () => {
    return (
        <section className="px-padding py-24 bg-dark overflow-hidden" id="app-preview">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Experience <span className="text-accent">the App</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                        A beautifully designed app that makes booking your driver a breeze.
                        Clean, intuitive, and built with you in mind.
                    </p>
                </motion.div>

                <div className="relative rounded-[40px] p-8 md:p-12">
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[40px] -z-10" />

                    <div className="flex justify-center items-end gap-4 md:gap-12 pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative w-48 md:w-64"
                        >
                            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl -z-10" />
                            <img
                                src="/images/image1.png"
                                alt="Professional Drivers app - Driver profile screen"
                                className="w-full rounded-3xl shadow-soft border-4 border-white"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative w-56 md:w-72 -mb-8 z-10"
                        >
                            <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-3xl -z-10" />
                            <img
                                src="/images/image2.png"
                                alt="Professional Drivers app - Trip selection screen"
                                className="w-full rounded-3xl shadow-pop border-4 border-white"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPreview;
