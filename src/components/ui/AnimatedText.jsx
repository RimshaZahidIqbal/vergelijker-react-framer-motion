"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedText = ({
    text,
    as: Tag = "p",
    className = "",
    lineBreakChar = "\n", // split character for new lines
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

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

    // Normalize input
    const segments =
        typeof text === "string"
            ? [{ value: text, color: "" }]
            : Array.isArray(text)
                ? text
                : [];

    return (
        <Tag ref={ref} className={`flex flex-col  ${className}`}>
            {segments.map((segment, si) =>
                segment.value
                    .split(lineBreakChar)
                    .map((line, liIndex) => (
                        <span
                            key={`${si}-line-${liIndex}`}
                            className={`flex flex-wrap gap-x-2  ${segment.color}`}
                        >
                            {line.split(" ").map((word, wi) => (
                                <span key={`${si}-${liIndex}-${wi}`} className="flex">
                                    {word.split("").map((letter, ci) => (
                                        <motion.span
                                            key={`${si}-${liIndex}-${wi}-${ci}`}
                                            variants={letterVariant}
                                            initial="initial"
                                            animate={isInView ? "animate" : "initial"}
                                            custom={si * 100 + liIndex * 50 + wi * 10 + ci}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                    &nbsp;
                                </span>
                            ))}
                        </span>
                    ))
            )}
        </Tag>
    );
};

export default AnimatedText;
