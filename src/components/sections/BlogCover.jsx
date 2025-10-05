import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { face, LinePattern, blogCoverBg } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedText from "../ui/AnimatedText";

const BlogCover = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center text-white overflow-hidden rounded-b-[20px]">
            {/* ------------------- TOP SECTION ------------------- */}
            <div className="relative w-full bg-[#4050DC] rounded-t-[20px] overflow-hidden">
                {/* BG Pattern */}
                <img
                    src={LinePattern}
                    alt="pattern"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* CONTENT */}
                <div className="relative flex flex-col md:flex-row justify-between items-start w-[90%] max-w-[1400px] mx-auto pt-16 pb-16"> {/* reduced bottom padding */}
                    {/* Heading + Buttons */}
                    <div className="flex flex-col gap-[43px] w-full md:w-[923px]">
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex flex-wrap md:w-3/3 items-center leading-tight">
                                <AnimatedText
                                    text="Discover valuable"
                                    className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                                />
                                <AnimatedText
                                    text="insights and tips"
                                    className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-[#FAFE13]"
                                />

                                {/* Last part + image together inline */}
                                <div className="flex items-center">
                                    <AnimatedText
                                        text="in our blog"
                                        className="font-[Neighbor] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em]"
                                    />
                                    <motion.img
                                        src={face}
                                        alt="face"
                                        className="ml-3 w-[55px] h-[74.5px] object-cover inline-block origin-center"
                                        whileHover={{
                                            rotate: [-15, 15, -10, 10, -5, 5, 0],
                                            transition: {
                                                duration: 1.2,
                                                ease: "easeInOut",
                                                times: [0, 0.2, 0.4, 0.6, 0.75, 0.85, 1],
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paragraph + Buttons (Right Side) */}
                    <div className="flex flex-col gap-4 mt-6 md:mt-0 md:w-3/4 px-4 sm:px-6 md:px-0">
                        <p className="text-base sm:text-lg leading-[1.6]">
                            Our blog offers extensive knowledge and practical advice to help
                            you make smart choices. Stay updated on the latest trends and
                            developments in the world of comparisons.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <AnimatedButton text={"Read More"} />
                            <input
                                type="text"
                                placeholder="Search product"
                                className="px-3 py-2 w-full sm:w-auto rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FAFE13]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------- BOTTOM SECTION ------------------- */}
            <div className="relative w-full h-[537px] rounded-b-[20px] overflow-hidden mt-0">
                {/* BG Image */}
                <img
                    src={blogCoverBg}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" />

                {/* MARQUEE */}
                <div className="absolute bottom-0 left-0 w-full py-4 bg-[#1D5E48] backdrop-blur-sm overflow-hidden border-t border-white/30 rounded-b-[20px]">
                    <motion.div
                        className="flex gap-12 text-white/90 text-[18px] font-[Geist] whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                        style={{ display: "flex" }}
                    >
                        {[...Array(2)].map((_, repeatIndex) => (
                            <div key={repeatIndex} className="flex gap-12">
                                {[
                                    "100% independent since 2018",
                                    "2.3M comparisons completed",
                                    "Secure & GDPR compliant",
                                    "9.4/10 user rating",
                                ].map((text, i) => (
                                    <span
                                        key={`${repeatIndex}-${i}`}
                                        className="flex items-center gap-2 min-w-[237px] justify-center"
                                    >
                                        <FaCheckCircle className="text-[#ffffff]" />
                                        {text}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BlogCover;
