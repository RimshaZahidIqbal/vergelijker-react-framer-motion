import { Card } from "../ui/Card";
import { Group1, Group2, Group3, Group4, GirlImage } from "../../assets";
import AnimatedText from "../ui/AnimatedText";

const CardSection = () => {
    return (
        <>
            <div className="text-left mb-6  leading-[1.31] tracking-[-0.02em]">
                <h1
                    className="font-[Neighbor] font-semibold text-[62px] leading-[103%] tracking-[-0.02em] text-gray-900"
                >
                    {/* Line 1 */}
                    <div className="flex items-center gap-3">
                        <AnimatedText text="Get your" />

                        {/* Girl Image */}
                        <img
                            src={GirlImage}
                            alt="Girl Illustration"
                            className="w-[133px] h-[44px] rounded-full object-cover"
                        />

                        {/* Circle with Group4 */}
                        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#FE65D9] opacity-100">
                            <img
                                src={Group4}
                                alt="Group 4"
                                className="w-6 h-6 object-contain"
                            />
                        </span>
                    </div>

                    {/* Line 2 */}
                    <div className="inline-flex gap-3">
                        <AnimatedText className="text-[#3B4EDB]" text="perfect match" />
                        <AnimatedText text="in" />
                    </div>

                    {/* Line 3 */}
                    <AnimatedText text="3 simple steps" />
                </h1>
                <p
                    className="
    flex items-center justify-start font-[Geist] font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]
    leading-[1.31] tracking-[-0.02em] text-center "
                >
                    Step-by-Step Process
                </p>

            </div>

            <div className="grid grid-cols-1 w-full  sm:grid-cols-2 lg:grid-cols-3 gap-1.5 ">
                <Card
                    icon={<img src={Group1} alt="Step 01" className="w-6 h-6" />}
                    number="Step 01"
                    heading="Tell us what you need"
                    items={[
                        "Quick questions about your situation",
                        "Takes 60 seconds or less",
                        "Your data stays private",
                    ]}
                />

                <Card
                    icon={<img src={Group2} alt="Step 02" className="w-6 h-6" />}
                    number="Step 02"
                    heading="We compare everything"
                    items={[
                        "Real-time pricing from 150+ providers",
                        "Transparent terms, no hidden costs",
                        "Personalized to your specific needs",
                    ]}
                />

                <Card
                    icon={<img src={Group3} alt="Step 03" className="w-6 h-6" />}
                    number="Step 03"
                    heading="Choose & switch instantly"
                    items={[
                        "Direct online application",
                        "We handle the paperwork",
                        "Start saving immediately",
                    ]}
                />
            </div>
        </>

    );
};

export default CardSection;
