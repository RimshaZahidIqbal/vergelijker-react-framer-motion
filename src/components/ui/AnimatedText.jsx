"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
    const letters = text.split(""); // split into characters
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });
    // once:false = re-trigger on scroll
    // margin gives earlier/later trigger threshold

    const letterVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.02,
                duration: 0.2,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div ref={ref} className="flex  flex-wrap">
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    variants={letterVariant}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    custom={i}
                    className={className}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedText;
