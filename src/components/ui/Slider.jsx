import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SliderCard from "./SliderCard";

const Slider = ({ items }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.querySelector(".slider-card")?.offsetWidth || 350;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -cardWidth : cardWidth,
                behavior: "smooth",
            });
        }
    };

    // Dynamically adjust image heights based on screen width
    const getHeights = () => {
        const width = window.innerWidth;

        if (width < 640) {
            // 📱 Mobile
            return [300, 240, 260];
        } else if (width < 1024) {
            // 💻 Tablet
            return [400, 320, 350];
        } else {
            // 🖥️ Desktop
            return [586, 390, 484];
        }
    };

    const heights = getHeights();

    return (
        <div className="relative w-full">
            {/* Cards Container */}
            <div
                ref={scrollRef}
                className="flex items-center gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4"
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="slider-card flex-shrink-0"
                        style={{
                            width: "clamp(250px, 30vw, 400px)", // responsive width
                        }}
                    >
                        <SliderCard {...item} height={heights[i % heights.length]} />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4 pt-6 justify-end pr-6">
                <button
                    onClick={() => scroll("left")}
                    className="flex items-center justify-center gap-2 w-28 px-4 py-2 border border-gray-300 rounded-full transition hover:bg-[#3B4EDB] hover:text-white"
                >
                    <FaArrowLeftLong /> Prev
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="flex items-center justify-center gap-2 w-28 px-4 py-2 border border-gray-300 rounded-full transition hover:bg-[#3B4EDB] hover:text-white"
                >
                    Next <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
};

export default Slider;
