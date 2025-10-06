"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Logo, face, VectorE, VectorV } from "../../assets";
import AnimatedText from "../ui/AnimatedText";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedFace from "../ui/AnimatedFace";

const FooterTopSection = () => {
    return (
        <motion.div
            className="
                w-11/12 sm:w-11/12 md:w-9/12 
                bg-[#FCFF5C] rounded-3xl shadow-xl 
                flex flex-col justify-between items-center
                pt-8 md:pt-12 pb-0 text-center mx-auto relative overflow-hidden
            "
            whileHover="hover"
            initial="initial"
            animate="initial"
        >
            {/* Content */}
            <div className="px-4 md:px-10">
                <div className="flex flex-col items-center mb-6">
                    <motion.img
                        src={Logo}
                        alt="logo"
                        className="w-20 md:w-32 cursor-pointer mb-1"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <AnimatedText
                        className="mt-2 font-[Neighbor] text-[#0C0C0C]  text-2xl md:text-5xl font-semibold"
                        text="Ready to confidently find"
                    />
                    <AnimatedText
                        className="mt-2 font-[Neighbor] text-[#181818] text-2xl md:text-5xl font-semibold"
                        text="your perfect match?"
                    />
                </div>

                {/* Subtext */}
                <p className="text-gray-800 mb-6 text-xs sm:text-sm md:text-base min-w-[80%] max-w-[70%] mx-auto">
                    Join 500,000+ smart consumers who compare with confidence
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center w-full mb-2 md:mb-4 lg:mb-8 sm:w-auto px-4">
                <AnimatedButton
                    text="Vergelijk nu"
                    className="text-sm sm:text-base"
                />
                <AnimatedButton
                    text="Ik wil meer weten"
                    className="bg-white text-[#212121] text-sm sm:text-base"
                />
            </div>

            {/* Marquee Section */}
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
                        <div
                            key={repeatIndex}
                            className="flex gap-6 sm:gap-8 md:gap-12 px-4 sm:px-8 md:px-12"
                        >
                            {[
                                "100% onafhankelijk sinds 2018",
                                "2.3M vergelijkingen gemaakt",
                                "Veilig & GDPR compliant",
                                "9.4/10 gebruikersrating",
                            ].map((text, i) => (
                                <span
                                    key={`${repeatIndex}-${i}`}
                                    className="flex items-center gap-2 min-w-[180px] sm:min-w-[220px] md:min-w-[260px] justify-center text-xs sm:text-sm md:text-base text-white/90 font-[Geist]"
                                >
                                    <FaCheckCircle className="text-white shrink-0" />
                                    {text}
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FooterTopSection;
