import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedText from "../ui/AnimatedText";

const contactInfo = [
    {
        id: 1,
        icon: <FaPhone size={24} />,
        title: "Phone",
        text: "+31 (0)20 123 4567",
    },
    {
        id: 2,
        icon: <FaEnvelope size={24} />,
        title: "Email",
        text: "Info@Vergelijker.NL",
    },
    {
        id: 3,
        icon: <FaMapMarkerAlt size={24} />,
        title: "Location",
        text: "Damstraat 1, Amsterdam\n1012 AB NL",
    },
];

const GetInTouch = () => {
    return (
        <section className="w-full flex flex-col items-center py-16 px-4 md:px-12 bg-white text-black">
            {/* Heading */}
            <AnimatedText
                text="Get in Touch"
                className="font-[Neighbor] font-semibold text-3xl md:text-[62px] leading-[103%] tracking-[-0.02em] text-center mb-4"
            />

            {/* Paragraph */}
            <p className="font-[Geist] font-normal text-base sm:text-lg leading-[100%] md:leading-[150%] text-center mb-12">
                Heb je vragen? Wij staan voor je klaar!
            </p>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full items-center lg:justify-center">
                {contactInfo.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-center gap-4 w-full sm:w-[360px] lg:w-[360px] h-[106px] px-4 md:px-6 rounded-[25.72px] border border-gray-300 shadow-sm transition-colors duration-300 hover:bg-[#1D5E48] hover:text-white cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-400 text-white text-sm md:text-xl transition-colors duration-300">
                            {item.icon}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">{item.title}</span>
                            <span className="text-base font-medium">{item.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GetInTouch;
