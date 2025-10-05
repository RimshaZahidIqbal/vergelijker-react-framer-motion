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
            className="relative w-full max-w-[1408px] mx-auto bg-[#3B4EDB] rounded-[30px] overflow-hidden py-[80px] flex flex-col gap-[50px]"
            style={{ height: "1057px" }}
        >
            {/* Background pattern */}
            <img
                src={LinePattern}
                alt="pattern"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Top Section */}
            <div className="relative flex flex-col md:flex-row justify-between items-start px-[70px] text-white z-10">
                <div className="flex flex-wrap max-w-5xl leading-tight">
                    <AnimatedText
                        text="Join "
                        className="block font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                    />
                    <AnimatedText
                        text="thousands of "
                        className="block font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-[#FAFE13]"
                    />
                    <AnimatedText
                        text="satisfied switchers "
                        className="block font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                    />

                </div>
                <p className="font-[Geist] text-[16px] leading-[150%] max-w-[420px] mt-4 md:mt-3">
                    Vergelijker.nl compares insurance, energy, telecom & financial
                    products with zero bias. Real reviews, transparent pricing, instant
                    results.
                </p>
            </div>


            {/* Middle Section (3 vertical columns of fixed-order vertical marquees) */}
            <div className="relative flex gap-8 z-10 px-[70px] h-[600px] overflow-hidden ">
                {/* Top Gradient */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#3B4EDB] to-transparent pointer-events-none" />


                {[0, 1, 2].map((colIndex) => (
                    <motion.div
                        key={colIndex}
                        className="flex flex-col gap-6"
                        animate={{ y: ["0%", "-100%"] }} // scroll full height
                        transition={{
                            repeat: Infinity,
                            duration: colIndex === 1 ? 20 : 18, // faster scroll
                            ease: "linear",
                        }}
                    >
                        {/* Repeat testimonials twice for seamless looping */}
                        {[...testimonials, ...testimonials].map((item, i) => (
                            <div
                                key={`${colIndex}-${i}`}
                                className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl w-[300px] h-[300px] p-[20px] flex flex-col gap-[18px] text-white shadow-lg"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 text-[#FAFE13]">
                                    {Array(5)
                                        .fill()
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>

                                {/* Heading */}
                                <h3 className="font-[Neighbor] text-[18px] font-semibold leading-[120%]">
                                    Great value home exercise
                                </h3>

                                {/* Paragraph */}
                                <p className="font-[Geist] text-[15px] leading-[150%] text-white/90 overflow-hidden">
                                    {item.text}
                                </p>

                                {/* Profile */}
                                <div className="flex items-center gap-3 mt-auto">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-[40px] h-[40px] rounded-full object-cover shadow-md"
                                    />
                                    <div>
                                        <h4 className="font-[Geist] font-semibold text-[15px] leading-[120%]">
                                            {item.name}
                                        </h4>
                                        <p className="font-[Geist] text-[13px] text-white/70 leading-[120%]">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#3B4EDB] to-transparent pointer-events-none" />

            </div>

            {/* Bottom Section - Button */}
            <div className="relative flex justify-center items-center z-10">
                <AnimatedButton text={"See All Testimonials"} />
            </div>
        </div>
    );
};

export default TestimonialsSection;
