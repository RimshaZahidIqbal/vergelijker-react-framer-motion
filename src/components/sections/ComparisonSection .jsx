import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    LinePattern,
} from "../../assets";
import AnimatedText from "../ui/AnimatedText";

const ComparisonSection = () => {
    const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    const [topImages, setTopImages] = useState([img1, img2, img3]);
    const [thirdImage, setThirdImage] = useState(img4);
    const [fourthImages, setFourthImages] = useState([img5, img6, img7]);
    const [fifthImages, setFifthImages] = useState([img8, img9]);

    const shuffleArray = (arr, count = arr.length) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTopImages(shuffleArray(allImages, 3));
            setThirdImage(shuffleArray(allImages, 1)[0]);
            setFourthImages(shuffleArray(allImages, 3));
            setFifthImages(shuffleArray(allImages, 2));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${LinePattern})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative overflow-hidden text-white rounded-3xl bg-[#1D5E48] w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12"
        >
            <div className="max-w-[1440px] mx-auto space-y-20 sm:space-y-24 md:space-y-26">
                {/* FIRST SECTION */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-10">
                    {/* LEFT SIDE HEADING */}
                    <div className="flex flex-wrap leading-tight w-full lg:w-1/2 text-left">
                        <AnimatedText
                            text="The comparison site"

                            className="block font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]"
                        />
                        <AnimatedText
                            text="that puts"
                            className="block font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-pink-400"
                        />
                        <AnimatedText
                            text="you first"
                            className="block font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]"
                        />
                    </div>

                    {/* RIGHT SIDE PARAGRAPH */}
                    <p className="w-full lg:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed mt-4 lg:mt-0">
                        We make comparing simple and stress-free - no hidden agendas, just
                        clear results designed to help you save time and money.
                    </p>
                </div>

                {/* SECOND SECTION */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 w-full">
                    {/* LEFT SIDE (TEXT + TAGS) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <AnimatedText
                            text="Truly Independent"
                            className="font-[Neighbor] text-lg sm:text-xl md:text-2xl lg:text-4xl text-left"
                        />

                        <div
                            className="
                grid grid-cols-2 gap-2 sm:gap-3 mt-4 
                justify-items-center sm:justify-items-start 
                md:gap-x-4 md:gap-y-2
                lg:gap-x-6
            "
                        >
                            {[
                                "No commission bias",
                                "No paid rankings",
                                "Objective recommendations",
                                "Your interests first",
                            ].map((txt, i) => (
                                <span
                                    key={i}
                                    className="
                        px-2 sm:px-3 py-1 
                        border border-white/50 rounded-full 
                        text-xs sm:text-sm md:text-base whitespace-nowrap
                        text-center sm:text-left
                    "
                                >
                                    {txt}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE (IMAGES) */}
                    <div
                        className="
            flex gap-3 sm:gap-4 flex-wrap justify-center 
            w-full lg:w-1/2 
            lg:justify-end
        "
                    >
                        {topImages.map((src, i) => (
                            <motion.div
                                key={i}
                                className="
                    w-20 h-24 sm:w-24 sm:h-28 
                    md:w-28 md:h-24         /* smaller for tablet */
                    lg:w-32 lg:h-24         /* normal for large */
                    rounded-xl overflow-hidden bg-white/10 flex-shrink-0
                "
                            >
                                <motion.img
                                    src={src}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>



                <hr className="opacity-40" />

                {/* THIRD SECTION */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-full">
                    {/* MOBILE ORDER (below md): Text first, then image, then 'Best Quality' */}
                    <div className="order-1 md:order-none md:w-2/3 space-y-3 sm:space-y-4 flex flex-col items-start m-0 p-0">
                        <AnimatedText
                            text="Lightning Fast"
                            className="font-[Neighbor] text-lg sm:text-xl md:text-3xl text-left !m-0 !p-0"
                        />
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed !m-0 !p-0">
                            Results in under 60 seconds. Real-time pricing updates. Instant
                            online switching. No waiting for quotes.
                        </p>
                    </div>

                    {/* IMAGE — appears after text on mobile */}
                    <div className="order-2 md:order-none w-20 h-24 sm:w-24 sm:h-28 md:w-32 md:h-28 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                        <motion.img
                            key={thirdImage}
                            src={thirdImage}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </div>

                    {/* 'Best Quality' — stays in place on laptop, last on mobile */}
                    <div className="order-3 md:order-none ml-auto md:ml-0">
                        <AnimatedText
                            text="Best Quality"
                            className="font-[Neighbor] text-base sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-center md:text-left"
                        />
                    </div>
                </div>


                <hr className="opacity-40" />

                {/* FOURTH SECTION */}
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full">

                    {/* HEADING + PARAGRAPH (first on mobile) */}
                    <div className="order-1 md:order-none md:w-2/3 space-y-3 sm:space-y-4 flex flex-col items-start text-left">
                        <AnimatedText
                            text="Completely Free"
                            className="font-[Neighbor] text-lg sm:text-xl md:text-3xl text-left"
                        />
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Vergelijker is completely free to use — no hidden costs, no tricks.
                            Just honest comparisons that help you make better choices.
                        </p>
                    </div>

                    {/* FIRST TWO IMAGES (side-by-side on mobile too) */}
                    <div className="order-2 md:order-none flex gap-4 sm:gap-6">
                        {fourthImages.slice(0, 2).map((src, i) => (
                            <div
                                key={i}
                                className="w-20 h-24 sm:w-24 sm:h-28 md:w-32 md:h-28 lg:w-36 rounded-xl overflow-hidden bg-white/10 flex-shrink-0"
                            >
                                <motion.img
                                    src={src}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* "Free. Fair. Fast." (inline text row) */}
                    <div className="order-3 md:order-none flex gap-3 sm:gap-4 justify-center md:flex-col md:text-left text-center">
                        {["Free.", "Fair.", "Fast."].map((word, i) => (
                            <AnimatedText
                                key={i}
                                text={word}
                                className="font-[Neighbor] text-lg sm:text-xl md:text-3xl leading-snug"
                            />
                        ))}
                    </div>

                    {/* LAST IMAGE */}
                    <div className="order-4 md:order-none w-20 h-24 sm:w-24 sm:h-28 md:w-32 md:h-28 lg:w-36 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                        <motion.img
                            key={fourthImages[2]}
                            src={fourthImages[2]}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </div>

                </div>

                <hr className="opacity-40" />
                {/* FIFTH SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 w-full">

                    {/* LEFT SIDE TEXT */}
                    <div className="space-y-4 sm:space-y-6 flex flex-col items-start text-left w-full md:w-1/2">
                        <AnimatedText
                            text="Secure & Private"
                            className="font-[Neighbor] text-lg sm:text-xl md:text-3xl text-left"
                        />

                        <div className="flex flex-wrap justify-start gap-2 sm:gap-3">
                            {[
                                "Bank-level encryption",
                                "GDPR compliant",
                                "Data never sold",
                            ].map((txt, i) => (
                                <span
                                    key={i}
                                    className="px-2 sm:px-3 py-1 border border-white/50 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap"
                                >
                                    {txt}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE (IMAGES + TEXT) */}
                    <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-end w-full md:w-1/2">

                        {/* IMAGES (side by side on mobile too) */}
                        <div className="flex gap-3 sm:gap-4">
                            {fifthImages.map((src, i) => (
                                <div
                                    key={i}
                                    className="w-20 h-24 sm:w-24 sm:h-28 md:w-32 md:h-28 lg:w-38 rounded-xl overflow-hidden bg-white/10 flex-shrink-0"
                                >
                                    <motion.img
                                        src={src}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col">
                            <AnimatedText
                                text="Transparent"
                                lineBreakChar="\n"
                                className="font-[Neighbor] text-base sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left leading-snug"
                            />
                            <AnimatedText
                                text="Privacy"
                                lineBreakChar="\n"
                                className="font-[Neighbor] text-base sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left leading-snug"
                            />
                            <AnimatedText
                                text="Policy"
                                lineBreakChar="\n"
                                className="font-[Neighbor] text-base sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left leading-snug"
                            />

                        </div>
                    </div>

                </div>

            </div>
        </motion.div>
    );
};

export default ComparisonSection;
