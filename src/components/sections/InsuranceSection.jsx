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
        <section className="w-full max-w-[1400px] mx-auto text-center py-10 px-3 sm:px-6 lg:px-8 xl:px-10">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center text-center space-y-2">
                <AnimatedText
                    text="Popular comparisons -"
                    className="font-[Neighbor] font-semibold 
                    text-[40px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] 
                    leading-[103%] tracking-[-0.02em] text-black"
                />
                <AnimatedText
                    text="start here"
                    className="font-[Neighbor] font-semibold 
                    text-[40px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] 
                    leading-[103%] tracking-[-0.02em] text-black"
                />
            </div>

            {/* Filter Group */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-8 flex-wrap">
                {filters.map((f, index) => (
                    <button
                        key={f.id}
                        onClick={() => setActiveIndex(index)}
                        className={`rounded-full px-4 sm:px-5 lg:px-6 py-2 border text-xs sm:text-sm lg:text-base font-medium transition-colors duration-300 ${active.id === f.id
                                ? "bg-[#3B4EDB] text-white"
                                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div
                className="
                flex flex-col lg:flex-row justify-center lg:justify-between items-center 
                gap-8 lg:gap-12 xl:gap-16 mt-12 text-left lg:text-left
            "
            >
                {/* Images */}
                <div className="flex gap-6 justify-center items-center">
                    {/* Main Image */}
                    <img
                        src={CarInsurance1}
                        alt="Main"
                        className="
                            w-[250px] sm:w-[320px] md:w-[420px] lg:w-[520px] xl:w-[580px] 
                            h-auto object-cover rounded-[16px] lg:rounded-[20px]
                        "
                    />
                    {/* Secondary Image - hidden on mobile */}
                    <div className="hidden sm:flex flex-col justify-between">
                        <img
                            src={CarInsurance2}
                            alt="Small"
                            className="
                                w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] xl:w-[280px] 
                                h-auto object-cover rounded-[12px] lg:rounded-[16px]
                            "
                        />
                        <span className="font-geist font-semibold text-sm sm:text-base lg:text-lg text-left mt-2">
                            [{active.counter}]
                        </span>
                    </div>
                </div>

                {/* Text + Button + Nav */}
                <div
                    className="
                    flex flex-col items-center lg:items-start text-center lg:text-left
                    gap-6 w-full sm:w-auto max-w-[440px] xl:max-w-[480px]
                "
                >
                    <AnimatedText
                        text={active.label}
                        className="font-[Neighbor] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text-black"
                    />
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
                        Find coverage from €19/month <br />
                        Compare 25+ insurers instantly
                    </p>
                    <AnimatedButton text={`Compare ${active.label}`} />

                    {/* Prev / Next + Counter */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 w-full pt-4">
                        {/* Counter (shown here only on mobile) */}
                        <span className="font-geist font-semibold text-base sm:hidden">
                            [{active.counter}]
                        </span>

                        {/* Prev / Next */}
                        <div className="flex gap-3 sm:gap-4">
                            <button
                                onClick={handlePrev}
                                className="flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white text-sm sm:text-base lg:text-lg"
                            >
                                <FaArrowLeftLong size={16} /> Prev
                            </button>
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 border border-[#E5E5E5] rounded-full transition-colors duration-300 hover:bg-[#3B4EDB] hover:text-white text-sm sm:text-base lg:text-lg"
                            >
                                Next <FaArrowRightLong size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
