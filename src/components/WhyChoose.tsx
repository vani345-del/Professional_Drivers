'use client';
import { ShieldCheck, BadgeCheck, Clock, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
    {
        icon: <ShieldCheck size={28} />,
        title: "Trust & Safety",
        desc: "Your safety is our priority. All rides are monitored."
    },
    {
        icon: <BadgeCheck size={28} />,
        title: "Verified Drivers",
        desc: "Background checked, trained, and professional drivers."
    },
    {
        icon: <Clock size={28} />,
        title: "Flexible Trips",
        desc: "Book for a few hours or a few days, as per your need."
    },
    {
        icon: <Wallet size={28} />,
        title: "Affordable Pricing",
        desc: "Transparent pricing with no hidden charges."
    }
];

export default function WhyChoose() {
    return (
        <section className="py-20 px-padding m-6 md:mx-12 md:mb-12" id="why-choose">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#c25e31]">Professional Drivers?</span>
                </h2>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 md:gap-12">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-start gap-4 p-8 bg-peach/20 rounded-card shadow-sm hover:shadow-soft hover:bg-peach/30 border border-dark/50 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white text-accent w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                            {reason.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-dark">{reason.title}</h3>
                            <p className="text-dark/70 leading-relaxed">{reason.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
