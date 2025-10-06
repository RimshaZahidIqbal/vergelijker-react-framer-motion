import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";
import { LinePattern, blogCoverBg, face } from "../../assets";
import AnimatedText from "../ui/AnimatedText";
import AnimatedButton from "../ui/AnimatedButton";
import { FaCalendarDays } from "react-icons/fa6";

const DetailCover = () => {
    return (
        <section className="relative w-full flex flex-col items-center text-white overflow-visible">
            {/* Background Pattern */}
            <img
                src={LinePattern}
                alt="pattern"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* ---------------- TOP SECTION ---------------- */}
            <div className="relative w-full bg-[#4050DC] rounded-[20px] overflow-hidden z-10">
                <div className="flex flex-col items-center text-center px-4 sm:px-6 pt-12 sm:pt-16 pb-24 md:pb-32 lg:pb-44 max-w-[1100px] mx-auto">
                    {/* button */}
                    <button className="min-w-[104px] px-4 py-2 h-[41px] rounded-[12px] border-[1.5px] border-[#fe65d8fa] bg-[#FE65D9] text-white font-medium text-sm 
        flex items-center justify-center gap-2 transition-all duration-300 
        hover:bg-[#3B4EDB] hover:text-white mb-4 sm:mb-6"
                    > Blog . Kennis </button>

                    {/* Headline */}
                    <div className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-6">
                        <AnimatedText
                            text="De voordelen van"
                            className="font-[Neighbor] font-semibold text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] leading-tight"
                        />
                        <AnimatedText
                            text=" onafhankelijk vergelijken"
                            className="font-[Neighbor] font-semibold text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-[#FAFE13] leading-tight"
                        />
                    </div>

                    {/* Author + Date Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-white/90 text-sm mt-4 sm:mt-6 mb-4 gap-3 sm:gap-0">
                        {/* Left: Author Info - Now comes first on mobile */}
                        <div className="flex items-center gap-3 order-1">
                            <img
                                src={face}
                                alt="author"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-[#1D5E48]"
                            />
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-lg sm:text-xl">Jan Jansen</span>
                                <span className="font-medium text-white/40 text-xs sm:text-sm">4 min leestijd</span>
                            </div>
                        </div>

                        {/* Right: Date + Time - Now comes second on mobile */}
                        <div className="flex items-center text-base sm:text-xl gap-3 order-2">
                            <FaCalendarDays className="text-white/70" />
                            <span>April 14, 2025</span>
                            <FaRegClock className="text-white/70" />
                            <span>9:36 am</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* ---------------- BOTTOM IMAGE CARD ---------------- */}
            <div className="relative w-[92%] max-w-[1400px] bg-white text-black rounded-[20px] overflow-hidden -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-43 shadow-2xl z-20">
                <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[537px]">
                    <img
                        src={blogCoverBg}
                        alt="blog cover"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" />
                </div>
            </div>
        </section>
    );
};

export default DetailCover;