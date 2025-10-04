import { useState } from "react";
import { CarInsurance1, CarInsurance2 } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import AnimatedText from "../ui/AnimatedText";

const filters = [
    { id: 1, label: "Car Insurance", counter: "01" },
    { id: 2, label: "Energy Plans", counter: "02" },
    { id: 3, label: "Home Insurance", counter: "03" },
    { id: 4, label: "Mobile & Internet", counter: "04" },
    { id: 5, label: "Travel Insurance", counter: "05" },
];

const ComparisonSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = filters[activeIndex];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? filters.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === filters.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full max-w-[1200px] mx-auto text-center py-12">
            {/* Heading */}

            <div className="flex flex-col items-center justify-center text-center ">
                <AnimatedText
                    text="Popular comparisons -"
                    className="font-[Neighbor] font-semibold text-[66px] leading-[103%] tracking-[-0.02em] text-black"
                />
                <AnimatedText
                    text="start here"
                    className="font-[Neighbor] font-semibold text-[66px] leading-[103%] tracking-[-0.02em] text-black"
                />
            </div>

            {/* Filter Group */}
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
                {filters.map((f, index) => (
                    <button
                        key={f.id}
                        onClick={() => setActiveIndex(index)}
                        className={`
              rounded-full px-5 py-2 border text-sm font-medium
              transition-colors duration-300
              ${active.id === f.id
                                ? "bg-[#3B4EDB] text-white"
                                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                            }
            `}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mt-12">
                {/* Images */}
                <div className="flex gap-6">
                    <img
                        src={CarInsurance1}
                        alt="Main"
                        className="w-[458px] h-[379px] object-cover rounded-[20px]"
                    />
                    <div className="flex flex-col justify-between">
                        <img
                            src={CarInsurance2}
                            alt="Small"
                            className="w-[228px] h-[252px] object-cover rounded-[16px]"
                        />

                        {/* Counter */}
                        <span className="font-geist font-semibold text-[16px] leading-[131%] tracking-[-0.02em] text-left">
                            [{active.counter}]
                        </span>


                    </div>
                    <div className="flex flex-col  items-start lg:items-center gap-8 mt-12">
                        {/* Text + Button */}
                        <div className="flex flex-col text-left gap-4">
                            <AnimatedText
                                text={active.label}
                                className="font-[Neighbor] font-semibold text-4xl text-black"
                            />

                            <p className="text-lg text-gray-700">
                                Find coverage from €19/month <br />
                                Compare 25+ insurers instantly
                            </p>
                            <AnimatedButton text={`Compare ${active.label}`} />
                        </div>
                        {/* Footer with counter + navigation */}
                        <div className="flex justify-between items-center mt-12">


                            {/* Prev / Next */}
                            <div className="flex gap-4 pt-6 justify-end ">
                                <button
                                    onClick={handlePrev}
                                    className="flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white"
                                >
                                    <FaArrowLeftLong size={16} /> Prev
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white"
                                >
                                    Next <FaArrowRightLong size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default ComparisonSection;
