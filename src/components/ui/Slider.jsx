import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SliderCard from "./SliderCard";

const Slider = ({ items }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 300 : 340;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const heights = [400, 550, 480]; // responsive heights

    return (
        <div className="relative w-full">
            {/* Slider container */}
            <div
                ref={scrollRef}
                className="flex gap-4 w-full pointer-events-none overflow-x-hidden"
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="first:ml-4 last:mr-4 flex-shrink-0 pointer-events-auto"
                    >
                        <SliderCard {...item} height={heights[i % heights.length]} />
                    </div>
                ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex gap-4 pt-6 justify-end">
                <button
                    onClick={() => scroll("left")}
                    className="flex items-center justify-center gap-2 w-28 xs:w-32 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white text-sm xs:text-base"
                >
                    <FaArrowLeftLong size={14} className="xs:size-4" /> Prev
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="flex items-center justify-center gap-2 w-28 xs:w-32 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white text-sm xs:text-base"
                >
                    Next <FaArrowRightLong size={14} className="xs:size-4" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
