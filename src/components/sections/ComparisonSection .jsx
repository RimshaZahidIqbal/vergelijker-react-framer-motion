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
        }, 5000); // slower switch (5 seconds)
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
            className="relative overflow-hidden text-white rounded-3xl bg-[#1D5E48] w-full py-16 px-6 md:px-12"
        >
            <div className="max-w-9xl mx-auto space-y-26">

                {/* FIRST SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="flex flex-wrap max-w-5xl leading-tight">
                        <AnimatedText
                            text="The comparison "
                            className="block font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                        />
                        <AnimatedText
                            text="site"
                            className="block font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-pink-400"
                        />
                        <AnimatedText
                            text="that puts "
                            className="block font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-pink-400"
                        />
                        <AnimatedText
                            text="you first"
                            className="block font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                        />
                    </div>

                    <p className="md:w-2/3 text-base sm:text-lg leading-relaxed">
                        We make comparing simple, and stress-free - no hidden agendas, just
                        clear designed to help you save time and money.
                    </p>
                </div>

                {/* SECOND SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div>
                        <AnimatedText
                            text="Truly Independent"
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl"
                        />
                        <div className="grid grid-cols-2 gap-3 mt-4 text-center justify-items-center">
                            {[
                                "No commission bias",
                                "No paid rankings",
                                "Objective recommendations",
                                "Your interests first",
                            ].map((txt, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 border border-white/50 rounded-full text-sm sm:text-base whitespace-nowrap"
                                >
                                    {txt}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 flex-wrap justify-center">
                        {topImages.map((src, i) => (
                            <motion.div
                                key={i}
                                className="w-24 h-28 md:w-36 md:h-28 rounded-xl overflow-hidden bg-white/10"
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

                <hr />

                {/* THIRD SECTION */}
                <div className="flex flex-col md:flex-row items-center gap-10 w-full">
                    <div className="w-24 h-28 rounded-xl overflow-hidden bg-white/10">
                        <motion.img
                            key={thirdImage}
                            src={thirdImage}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </div>

                    <div className="md:w-2/3 space-y-4">
                        <AnimatedText
                            text="Lightning Fast"
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl"
                        />
                        <p className="text-base sm:text-lg leading-relaxed">
                            Results in under 60 seconds, Real-time pricing updates. Instant
                            online switching. No waiting for quotes.
                        </p>
                    </div>

                    <div className="ml-auto">
                        <AnimatedText
                            text="Best Quality"
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl whitespace-nowrap"
                        />
                    </div>
                </div>

                <hr />

                {/* FOURTH SECTION */}
                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                    {fourthImages.slice(0, 2).map((src, i) => (
                        <div
                            key={i}
                            className="w-24 h-28 md:w-36 md:h-28 rounded-xl overflow-hidden bg-white/10"
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

                    <div className="flex flex-col w-20 text-center md:text-left">
                        <AnimatedText
                            text="Free."
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl leading-snug"
                        />
                        <AnimatedText
                            text="Fair."
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl leading-snug"
                        />
                        <AnimatedText
                            text="Fast."
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl leading-snug"
                        />
                    </div>

                    <div className="w-24 h-28 md:w-36 md:h-28 rounded-xl overflow-hidden bg-white/10">
                        <motion.img
                            key={fourthImages[2]}
                            src={fourthImages[2]}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </div>

                    <div className="md:w-2/3 space-y-4">
                        <AnimatedText
                            text="Completely Free"
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl"
                        />
                        <p className="text-base sm:text-lg leading-relaxed">
                            Vergelijker is completely free to use - no hidden costs, no tricks.
                            Just honest comparisons that help you make better choices.
                        </p>
                    </div>
                </div>

                <hr />

                {/* FIFTH SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
                    <div className="space-y-6 text-center md:text-left">
                        <AnimatedText
                            text="Secure & Private"
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl"
                        />
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {[
                                "Bank-level encryption",
                                "GDPR compliant",
                                "Data never sold",
                            ].map((txt, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 border border-white/50 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap"
                                >
                                    {txt}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        {fifthImages.map((src, i) => (
                            <div
                                key={i}
                                className="w-24 h-28 md:w-38 md:h-30 rounded-xl overflow-hidden bg-white/10"
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

                        <AnimatedText
                            text="Transparent Privacy Policy"
                            className="font-[Neighbor] text-xl sm:text-2xl md:text-3xl text-center leading-snug"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ComparisonSection;

