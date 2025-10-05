import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { face, carCard, homeCard, heroBg, LinePattern } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedText from "../ui/AnimatedText";

const slides = [
    {
        id: 1,
        title: "Car Insurance",
        img: carCard,
        text: "Lorem Ipsum is that it has a more-or-less normal distribution.",
    },
    {
        id: 2,
        title: "Home & Contents Insurance",
        img: homeCard,
        text: "Lorem Ipsum is that it has a more-or-less normal distribution.",
    },
    {
        id: 3,
        title: "Travel Insurance",
        img: carCard,
        text: "Lorem Ipsum is that it has a more-or-less normal distribution.",
    },
    {
        id: 4,
        title: "Health Insurance",
        img: homeCard,
        text: "Lorem Ipsum is that it has a more-or-less normal distribution.",
    },
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
    const handlePrev = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center text-white overflow-hidden rounded-b-[20px]">
            {/* ------------------- TOP SECTION ------------------- */}


            <div className="relative w-full bg-[#4050DC] rounded-t-[20px] overflow-hidden">
                {/* BG Pattern */}
                <img
                    src={LinePattern}
                    alt="pattern"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* CONTENT */}
                <div className="relative flex flex-col md:flex-row justify-between items-start w-[90%] max-w-[1400px] mx-auto pt-16 pb-32">
                    {/* Heading + Buttons */}
                    <div className="flex flex-col gap-[43px] w-full md:w-[923px]">
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex flex-wrap md:w-3/3 items-center leading-tight">
                                <AnimatedText
                                    text="Find your "
                                    className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                                />
                                <AnimatedText
                                    text="perfect match "
                                    className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-[#FAFE13]"
                                />
                                <AnimatedText
                                    text="in seconds - 100% "
                                    className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                                />
                                <AnimatedText
                                    text="independent, "
                                    className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-[#FAFE13]"
                                />
                                {/* Last part + image together inline */}
                                <div className="flex items-center">
                                    <AnimatedText
                                        text="crystal clear."
                                        className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                                    />
                                    <motion.img
                                        src={face}
                                        alt="face"
                                        className="ml-3 w-[55px] h-[74.5px] object-cover inline-block origin-center"
                                        whileHover={{
                                            rotate: [-15, 15, -10, 10, -5, 5, 0],
                                            transition: {
                                                duration: 1.2,
                                                ease: "easeInOut",
                                                times: [0, 0.2, 0.4, 0.6, 0.75, 0.85, 1]
                                            },
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <AnimatedButton />
                                <AnimatedButton text={"Learn More"} />
                            </div>
                        </div>
                    </div>

                    {/* Paragraph */}
                    <p className="md:w-1/3 text-base sm:text-lg leading-[1.6] md:mt-4">
                        Vergelijker.nl compares insurance, energy, telecom & financial
                        products with zero bias. Real reviews, transparent pricing, instant
                        results.
                    </p>
                </div>
            </div>



            {/* ------------------- MIDDLE SECTION (Floating Slider) ------------------- */}


            <div className="absolute top-[44%] right-[1%] transform -translate-y-1/2 z-20 w-[580px] flex flex-col items-center gap-4">
                {/* Counter + Arrows */}
                <div className="flex justify-between w-full items-center text-white text-base font-[Geist]">
                    <span>
                        {String(slides[current].id).padStart(2, "0")} /{" "}
                        {String(slides.length).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-[#E32FB6] transition"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white  hover:bg-[#E32FB6] transition"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Slider Cards */}
                <div className="flex justify-center gap-3 w-full">
                    {[slides[current], slides[(current + 1) % slides.length]].map((card) => (
                        <div
                            key={card.id}
                            className="bg-white border border-white/20 rounded-[14px] w-[270px] h-[250px] p-3 flex flex-col gap-3 backdrop-blur-sm"
                        >
                            <h3 className="font-[Neighbor] text-[18px] font-semibold leading-[120%] text-black">
                                {card.title}
                            </h3>
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-[150px] object-cover rounded-[10px]"
                            />
                            <p className="font-[Geist] text-[14px] leading-[120%] text-black/90">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            {/* ------------------- BOTTOM SECTION ------------------- */}
            <div className="relative w-full h-[547px] rounded-b-[20px] overflow-hidden mt-0">
                {/* BG Image */}
                <img
                    src={heroBg}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" />

                {/* MARQUEE */}
                <div className="absolute bottom-0 left-0 w-full py-4 bg-[#1D5E48] backdrop-blur-sm overflow-hidden border-t border-white/30 rounded-b-[20px]">
                    <motion.div
                        className="flex gap-12 text-white/90 text-[18px] font-[Geist] whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                        style={{ display: "flex" }}
                    >
                        {/* 👇 Repeat content twice side-by-side */}
                        {[...Array(2)].map((_, repeatIndex) => (
                            <div key={repeatIndex} className="flex gap-12">
                                {[
                                    "100% independent since 2018",
                                    "2.3M comparisons completed",
                                    "Secure & GDPR compliant",
                                    "9.4/10 user rating",
                                ].map((text, i) => (
                                    <span
                                        key={`${repeatIndex}-${i}`}
                                        className="flex items-center gap-2 min-w-[237px] justify-center"
                                    >
                                        <FaCheckCircle className="text-[#ffffff]" />
                                        {text}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>


            </div>

        </section>
    );
}
export default HeroSection