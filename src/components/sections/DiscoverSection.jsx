import React from "react";
import AnimatedText from "../ui/AnimatedText";
import { discoverimg } from "../../assets";

const DiscoverSection = () => {
    return (
        <section className="relative w-full flex flex-col md:flex-row items-center text-black overflow-hidden rounded-b-[20px]">
            {/* ------------------- LEFT SIDE (Text) ------------------- */}
            <div className="flex flex-col justify-start w-full md:w-1/2 px-6 sm:px-8 md:px-12 py-8 md:py-10 gap-6">
                <div className="flex flex-col gap-2">
                    <AnimatedText
                        text="Discover our latest blog"
                        className="font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]"
                    />
                    <AnimatedText
                        text="article, expand your knowledge"
                        className="font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-[#3B4EDB]"
                    />
                    <AnimatedText
                        text="about insurance!"
                        className="font-[Neighbor] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]"
                    />
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.6] mt-4 max-w-full text-center">
                    Our blog offers extensive knowledge and advice to help you make smart choices. Stay updated on the latest trends in the world of comparisons.
                </p>
            </div>


            {/* ------------------- RIGHT SIDE (Image) ------------------- */}
            <div className="flex justify-center w-full md:w-1/2 px-6 sm:px-8 md:px-12 py-6 md:py-10">
                <img
                    src={discoverimg}
                    alt="Blog cover"
                    className="w-full max-w-[584px] h-auto rounded-[30px] object-cover"
                />
            </div>
        </section>
    );
};

export default DiscoverSection;
