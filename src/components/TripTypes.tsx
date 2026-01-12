'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const types = [
    {
        title: "One-Way Trip",
        desc: "Single point-to-point drop service.",
        img: "/images/oneway.png"
    },
    {
        title: "Round Trip",
        desc: "Seamless journey to your destination and back.",
        img: "/images/roundtrip.png"
    },
    {
        title: "Outstation",
        desc: "Long-distance travel between cities with comfort.",
        img: "/images/outstation.png"
    }
];

export default function TripTypes() {
    return (
        <section className="py-20 px-padding text-center" id="trip-types">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                    Our <span className="relative inline-block z-10">
                        Services
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-10 rounded-full"></span>
                    </span>
                </h2>
                <p className="text-lg text-dark/60">Tailored driving solutions for every need</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 md:gap-12">
                {types.map((type, index) => (
                    <motion.div
                        key={index}
                        className="bg-peach/10 p-10 rounded-card shadow-sm transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:-translate-y-2 hover:shadow-soft hover:bg-peach/20 border border-dark/50 group"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-[140px] h-[140px] mb-8 relative p-4 bg-peach/20 rounded-full group-hover:bg-peach/40 transition-colors">
                            <Image
                                src={type.img}
                                alt={type.title}
                                fill
                                style={{ objectFit: 'contain', padding: '20px' }}
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-dark">{type.title}</h3>
                        <p className="text-dark/70 leading-relaxed max-w-[260px]">{type.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
