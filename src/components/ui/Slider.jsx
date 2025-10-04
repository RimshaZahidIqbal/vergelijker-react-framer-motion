// import React, { useRef } from "react";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import SliderCard from "./SliderCard";

// const Slider = ({ items }) => {
//     const scrollRef = useRef(null);

//     const scroll = (direction) => {
//         if (scrollRef.current) {
//             scrollRef.current.scrollBy({
//                 left: direction === "left" ? -340 : 340, // adjust scroll distance per card
//                 behavior: "smooth",
//             });
//         }
//     };

//     const heights = [503.74, 741.99, 612.65]; // exact pixel heights

//     return (
//         <div className="relative w-full">
//             {/* Slider container */}
//             <div
//                 ref={scrollRef}
//                 className="flex gap-4 w-full pointer-events-none" // disable manual scrolling
//                 style={{
//                     overflowX: "hidden", // hide scroll
//                 }}
//             >
//                 {items.map((item, i) => (
//                     <div
//                         key={i}
//                         className="first:ml-4 last:mr-4 flex-shrink-0 pointer-events-auto" // allow button clicks
//                     >
//                         <SliderCard {...item} height={heights[i % heights.length]} />
//                     </div>
//                 ))}
//             </div>

//             {/* Bottom Prev / Next buttons */}
//             <div className="flex gap-4 pt-6 justify-end">
//                 <button
//                     onClick={() => scroll("left")}
//                     className="flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white"
//                 >
//                     <FaArrowLeftLong size={16} /> Prev
//                 </button>
//                 <button
//                     onClick={() => scroll("right")}
//                     className="flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white"
//                 >
//                     Next <FaArrowRightLong size={16} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Slider;
import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SliderCard from "./SliderCard";

const Slider = ({ items }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -340 : 340, // scroll distance per card
                behavior: "smooth",
            });
        }
    };

    const heights = [500, 650, 580]; // exact pixel heights

    return (
        <div className="relative w-full">
            {/* Slider container */}
            <div
                ref={scrollRef}
                className="flex gap-4 w-full pointer-events-none"
                style={{ overflowX: "hidden" }} // disable manual scroll
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

            {/* Bottom Prev / Next buttons */}
            <div className="flex gap-4 pt-6 justify-end">
                <button
                    onClick={() => scroll("left")}
                    className="flex items-center justify-center gap-2 w-32 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white"
                >
                    <FaArrowLeftLong size={16} /> Prev
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="flex items-center justify-center gap-2 w-32 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white"
                >
                    Next <FaArrowRightLong size={16} />
                </button>
            </div>
        </div>
    );
};

export default Slider;
