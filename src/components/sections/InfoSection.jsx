import React from 'react'
import AnimatedText from '../ui/AnimatedText'

const InfoSection = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center mb-6 leading-[1.31] tracking-[-0.02em]">
                <h2
                    className="font-[Neighbor] font-semibold text-[62px] leading-[103%] tracking-[-0.02em] max-w-2xl text-gray-900"
                >
                    {/* Line 1 */}
                    <span className="inline-flex gap-3">
                        <AnimatedText text="Smart choices" />
                        <AnimatedText className="text-[#FE65D9]" text="start with" />
                    </span>

                    {/* Line 2 */}
                    <span className="inline-flex gap-3 justify-center w-full">
                        <AnimatedText className="text-[#FE65D9]" text="good" />
                        <AnimatedText text="information" />
                    </span>
                </h2>

                <p
                    className="
                    w-full font-normal  
                    text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] 
                    leading-[149%] text-center 
                    max-w-xl mx-auto mt-6
                "
                >
                    We give you clear, unbiased insights so you can make <br /> smarter choices with confidence.
                </p>
            </div>

        </div>
    )
}

export default InfoSection
