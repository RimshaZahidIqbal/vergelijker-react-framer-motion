"use client";
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedText = ({
    text,
    as: Tag = "p",
    className = "",
    lineBreakChar = "\n",
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    // Motion variants for each letter
    const letterVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.02,
                duration: 0.2,
                ease: "easeOut",
            },
        }),
    };

    // 🧠 Precompute segments only once using useMemo
    const segments = useMemo(() => {
        if (typeof text === "string") return [{ value: text, color: "" }];
        if (Array.isArray(text)) return text;
        return [];
    }, [text]);

    return (
        <Tag ref={ref} className={`flex flex-col ${className}`}>
            {segments.map((segment, si) => {
                const lines = segment.value.split(lineBreakChar);

                return lines.map((line, li) => {
                    const words = line.split(" ");

                    return (
                        <span
                            key={`${si}-line-${li}`}
                            className="flex flex-wrap gap-x-2 "
                        >
                            {words.map((word, wi) => (
                                <span key={`${si}-${li}-${wi}`} className="flex">
                                    {word.split("").map((letter, ci) => {
                                        const index = si * 100 + li * 50 + wi * 10 + ci;
                                        return (
                                            <motion.span
                                                key={index}
                                                variants={letterVariant}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                custom={index}
                                                className={segment.color}
                                            >
                                                {letter}
                                            </motion.span>
                                        );
                                    })}
                                    &nbsp;
                                </span>
                            ))}
                        </span>
                    );
                });
            })}
        </Tag>
    );
};

export default React.memo(AnimatedText);
