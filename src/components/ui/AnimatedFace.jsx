"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedFace — floats gently + rotates slowly on hover from parent
 * @param {string} src - image path
 * @param {string} className - Tailwind CSS classes
 * @param {number} [delay=0] - optional delay for staggering animation
 */
const AnimatedFace = ({ src, className = "", delay = 0 }) => {
    const variants = {
        initial: {
            rotate: 0,
            y: [0, -6, 0, 6, 0],
            transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
            },
        },
        hover: {
            rotate: [0, -10, 10, -6, 6, 0],
            y: [0, -10, 0, 10, 0],
            transition: {
                duration: 2.5,
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
            whileHover="hover"
        />
    );
};

export default AnimatedFace;
