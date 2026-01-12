'use client';
import { motion } from 'framer-motion';
import { MapPin, UserCheck, Smile } from 'lucide-react';

const steps = [
    {
        icon: <MapPin size={32} />,
        title: "Choose Trip Type",
        desc: "Select One-way, Round-trip, or Outstation to fit your journey needs."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Book a Driver",
        desc: "Get matched with a verified, professional driver matching your requirements."
    },
    {
        icon: <Smile size={32} />,
        title: "Enjoy the Ride",
        desc: "Sit back and relax while our expert driver takes you to your destination safely."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-20 px-padding bg-white rounded-card mx-6 my-12 md:mx-12 shadow-soft md:p-[60px]" id="how-it-works">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                    How It <span className="text-accent">Works</span>
                </h2>
                <p className="text-dark/60">Three simple steps to your destination.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex-1 min-w-[280px] max-w-[360px] p-8 bg-peach/30 hover:bg-peach/50 rounded-card flex flex-col items-center gap-6 relative transition-colors duration-300 border border-dark/50"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/20">
                            {step.icon}
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-dark mb-3">{step.title}</h3>
                            <p className="text-base text-dark/70 leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
