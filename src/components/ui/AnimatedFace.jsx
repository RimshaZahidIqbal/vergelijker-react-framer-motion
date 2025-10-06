"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedFace — floating + rotating face with parent hover sync
 * @param {string} src - image path
 * @param {string} className - Tailwind classes
 * @param {number} [delay=0] - optional stagger delay
 */
const AnimatedFace = ({ src, className = "", delay = 0 }) => {
    const variants = {
        initial: {
            rotate: [0, -4, 4, -2, 2, 0],
            y: [0, -6, 0, 6, 0],
            transition: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
            },
        },
        hover: {
            rotate: [0, -10, 10, -6, 6, 0],
            y: [0, -12, 0, 12, 0],
            transition: {
                duration: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
            },
        },
    };

    return (
        <motion.img
            src={src}
            alt="face"
            className={className}
            variants={variants}
            initial="initial"
            animate="initial"
        />
    );
};

export default AnimatedFace;
