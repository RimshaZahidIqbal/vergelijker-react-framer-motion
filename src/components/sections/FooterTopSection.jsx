import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Logo } from "../../assets";
import AnimatedText from "../ui/AnimatedText";
import AnimatedButton from "../ui/AnimatedButton";

const FooterTopSection = () => {
    return (
        <div
            className="
                w-11/12 sm:w-10/12 md:w-8/12 
                bg-[#FCFF5C] rounded-3xl shadow-xl 
                flex flex-col justify-between
                pt-10 pb-0 text-center
            "
        >
            {/* Content */}
            <div className="px-4 md:px-10">
                <div className="flex flex-col items-center mb-6">
                    <motion.img
                        src={Logo}
                        alt="logo"
                        className="w-20 md:w-28 cursor-pointer mb-1"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <AnimatedText
                        className="mt-2 font-[Neighbor] text-[#0C0C0C] text-2xl md:text-5xl font-semibold"
                        text="Ready to confidently find"
                    />
                    <AnimatedText
                        className="mt-2 font-[Neighbor] text-[#0C0C0C] text-2xl md:text-5xl font-semibold"
                        text="your perfect match?"
                    />
                </div>

                <p className="text-gray-800 mb-6 text-sm md:text-base">
                    Join 500,000+ smart consumers <br /> who compare with confidence
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <AnimatedButton text="Start Comparing Now" />
                    <AnimatedButton
                        text="Browse All Categories"
                        className="bg-white text-[#212121]"
                    />
                </div>
            </div>

            {/* MARQUEE */}
            <div className="w-full py-4 bg-[#1D5E48] backdrop-blur-sm overflow-hidden border-t border-white/30 rounded-b-[20px]">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                >
                    {[...Array(2)].map((_, repeatIndex) => (
                        <div key={repeatIndex} className="flex gap-8 md:gap-12 px-6 md:px-12">
                            {[
                                "100% independent since 2018",
                                "2.3M comparisons completed",
                                "Secure & GDPR compliant",
                                "9.4/10 user rating",
                            ].map((text, i) => (
                                <span
                                    key={`${repeatIndex}-${i}`}
                                    className="flex items-center gap-2 min-w-[200px] md:min-w-[240px] justify-center text-xs sm:text-sm md:text-lg text-white/90 font-[Geist]"
                                >
                                    <FaCheckCircle className="text-white" />
                                    {text}
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FooterTopSection;
