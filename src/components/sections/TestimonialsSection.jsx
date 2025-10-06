import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { user1, user2, user3, LinePattern } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedText from "../ui/AnimatedText";

const testimonials = [
    {
        id: 1,
        name: "Patrick",
        role: "Product Designer at COVEO",
        text: "I was recommended masco from a dear friend and WOW!!! Gives energy, strength & mostly your motivation and you helped me grow beyond my expectations.",
        img: user1,
    },
    {
        id: 2,
        name: "Patrick",
        role: "Product Designer at COVEO",
        text: "I was recommended masco from a dear friend and WOW!!! Gives energy, strength & mostly your motivation and you helped me grow beyond my expectations.",
        img: user2,
    },
    {
        id: 3,
        name: "Patrick",
        role: "Product Designer at COVEO",
        text: "I was recommended masco from a dear friend and WOW!!! Gives energy, strength & mostly your motivation and you helped me grow beyond my expectations.",
        img: user3,
    },
];

const TestimonialsSection = () => {
    return (
        <div
            className="relative w-full max-w-[1408px] mx-auto bg-[#3B4EDB] rounded-[30px] overflow-hidden py-8 md:py-12 lg:py-[80px] flex flex-col gap-6 md:gap-8 lg:gap-[50px] px-4 sm:px-6 lg:px-8"
            style={{ minHeight: "auto", height: "auto" }}
        >
            {/* Background pattern */}
            <img
                src={LinePattern}
                alt="pattern"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Top Section */}
            <div className="relative flex flex-col lg:flex-row justify-between items-start lg:px-[70px] text-white z-10 gap-6 md:gap-8">
                <div className="flex flex-wrap max-w-5xl leading-tight">
                    <AnimatedText
                        text="Join "
                        className="block font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]"
                    />
                    <AnimatedText
                        text="thousands of "
                        className="block font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-[#FAFE13]"
                    />
                    <AnimatedText
                        text="satisfied switchers "
                        className="block font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]"
                    />
                </div>
                <p className="font-[Geist] text-sm sm:text-[16px] leading-[150%] max-w-full lg:max-w-[400px] mt-0">
                    Vergelijker.nl compares insurance, energy, telecom & financial
                    products with zero bias. Real reviews, transparent pricing, instant
                    results.
                </p>
            </div>

            {/* Middle Section (3 vertical columns of fixed-order vertical marquees) */}
            <div className="relative flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 z-10 lg:px-[70px] h-auto sm:h-[400px] lg:h-[600px] overflow-hidden">
                {/* Top Gradient */}
                <div className="absolute top-0 left-0 w-full h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-[#3B4EDB] to-transparent pointer-events-none z-20" />

                {[0, 1, 2].map((colIndex) => (
                    <motion.div
                        key={colIndex}
                        className="flex flex-col gap-4 md:gap-6 w-full sm:w-1/3"
                        animate={{ y: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: colIndex === 1 ? 20 : 18,
                            ease: "linear",
                        }}
                    >
                        {/* Repeat testimonials twice for seamless looping */}
                        {[...testimonials, ...testimonials].map((item, i) => (
                            <div
                                key={`${colIndex}-${i}`}
                                className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl lg:rounded-3xl w-full max-w-full sm:max-w-[300px] h-[280px] sm:h-[300px] p-4 md:p-5 lg:p-[20px] flex flex-col gap-3 md:gap-4 lg:gap-[18px] text-white shadow-lg mx-auto"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 text-[#FAFE13]">
                                    {Array(5)
                                        .fill()
                                        .map((_, i) => (
                                            <FaStar key={i} size={14} className="sm:text-base" />
                                        ))}
                                </div>

                                {/* Heading */}
                                <h3 className="font-[Neighbor] text-base sm:text-[17px] lg:text-[18px] font-semibold leading-[120%]">
                                    Great value home exercise
                                </h3>

                                {/* Paragraph */}
                                <p className="font-[Geist] text-sm sm:text-[15px] leading-[150%] text-white/90 overflow-hidden flex-1">
                                    {item.text}
                                </p>

                                {/* Profile */}
                                <div className="flex items-center gap-3 mt-2">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-[Geist] font-semibold text-sm sm:text-[15px] leading-[120%] truncate">
                                            {item.name}
                                        </h4>
                                        <p className="font-[Geist] text-xs sm:text-[13px] text-white/70 leading-[120%] truncate">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 lg:h-16 bg-gradient-to-t from-[#3B4EDB] to-transparent pointer-events-none z-20" />
            </div>

            {/* Bottom Section - Button */}
            <div className="relative flex justify-center items-center z-10 mt-4 md:mt-6 lg:mt-0">
                <AnimatedButton text={"See All Testimonials"} />
            </div>
        </div>
    );
};

export default TestimonialsSection;  