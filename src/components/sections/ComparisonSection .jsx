// import React from "react";
// import { motion } from "framer-motion";
// import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from "../../assets";

// const ComparisonSection = () => {
//     return (
//         <div className="w-full bg-[#0f3d2e] text-white px-12 py-20 space-y-32">

//             {/* First Section */}
//             <div className="flex justify-between items-start w-[1300px] mx-auto">
//                 <motion.h1
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="w-[674px] font-[Neighbor] font-semibold text-[66px] leading-[103%] tracking-[-0.02em]"
//                 >
//                     The comparison <span className="text-pink-400">site</span> that puts you first
//                 </motion.h1>

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.2, duration: 0.8 }}
//                     className="w-[448px] font-[Geist] text-[18px] leading-[131%] tracking-[-0.02em]"
//                 >
//                     We make comparing simple, transparent, and stress-free — no hidden agendas,
//                     just clear choices designed to help you save time and money.
//                 </motion.p>
//             </div>

//             {/* Second Section */}
//             <div className="flex justify-between items-center w-[1408px] mx-auto px-[54px]">
//                 <div>
//                     <h2 className="font-[Neighbor] text-[42px]">Truly Independent</h2>
//                     <div className="flex gap-3 mt-4">
//                         {[
//                             "No commission bias",
//                             "No paid rankings",
//                             "Objective recommendations",
//                             "Your interests first",
//                         ].map((txt, i) => (
//                             <span
//                                 key={i}
//                                 className="px-5 py-2 border border-white/50 rounded-full text-[16px] font-[Geist]"
//                             >
//                                 {txt}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex gap-4">
//                     <img src={img1} className="w-[112px] h-[128px] rounded-[16px]" />
//                     <img src={img2} className="w-[181px] h-[128px] rounded-[16px]" />
//                     <img src={img3} className="w-[196px] h-[128px] rounded-[16px]" />
//                 </div>
//             </div>

//             {/* Third Section */}
//             <div className="flex items-center gap-[60px] w-[1408px] mx-auto">
//                 <img src={img4} className="w-[112px] h-[128px] rounded-[16px]" />
//                 <div className="w-[457px] space-y-4">
//                     <h2 className="font-[Neighbor] text-[42px]">Lightning Fast</h2>
//                     <p className="font-[Geist] text-[18px] leading-[131%]">
//                         Results in under 60 seconds, Real-time pricing updates.
//                         Instant online switching. No waiting for quotes
//                     </p>
//                 </div>
//                 <h2 className="font-[Neighbor] text-[42px]">Best Quality</h2>
//             </div>

//             {/* Fourth Section */}
//             <div className="flex items-center gap-[60px] w-[1408px] mx-auto">
//                 <img src={img5} className="w-[174px] h-[128px] rounded-[16px]" />
//                 <img src={img6} className="w-[112px] h-[128px] rounded-[16px]" />
//                 <h2 className="font-[Neighbor] text-[42px] leading-[105%]">
//                     Free. Fair. Fast.
//                 </h2>
//                 <img src={img7} className="w-[112px] h-[128px] rounded-[16px]" />

//                 <div className="w-[560px] space-y-4">
//                     <h2 className="font-[Neighbor] text-[42px]">Completely Free</h2>
//                     <p className="font-[Geist] text-[18px] leading-[131%]">
//                         Vergelijker.nl is completely free to use — no hidden costs, no tricks.
//                         Just honest comparisons that help you make better choices.
//                     </p>
//                 </div>
//             </div>

//             {/* Fifth Section */}
//             <div className="flex justify-between items-center w-[1408px] mx-auto px-[54px]">
//                 <div className="space-y-6">
//                     <h2 className="font-[Neighbor] text-[42px]">Secure & Private</h2>
//                     <div className="flex gap-4">
//                         {[
//                             "Bank-level encryption",
//                             "GDPR compliant",
//                             "Data never sold",
//                         ].map((txt, i) => (
//                             <span
//                                 key={i}
//                                 className="px-5 py-2 border border-white/50 rounded-full text-[16px] font-[Geist]"
//                             >
//                                 {txt}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex gap-4 items-center">
//                     <img src={img8} className="w-[112px] h-[128px] rounded-[16px]" />
//                     <img src={img9} className="w-[181px] h-[128px] rounded-[16px]" />
//                     <h2 className="font-[Neighbor] text-[42px] w-[237px]">
//                         Transparent Privacy Policy
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ComparisonSection;

import React from "react";
import { motion } from "framer-motion";
import {
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    bgLine // <-- import your background line image here (e.g., from assets)
} from "../../assets";

const ComparisonSection = () => {
    return (
        <motion.div
            style={{
                width: "1407px",
                height: "1312px",
                top: "1305.14px",
                left: "-54px",
                opacity: 1,
                backgroundColor: "#1D5E48",
                backgroundImage: `url(${bgLine})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative overflow-hidden text-white rounded-[20px]"
        >
            <div className="w-full px-12 py-20 space-y-32">

                {/* --- paste your existing inner content exactly as-is --- */}
                {/* First Section */}
                <div className="flex justify-between items-start w-[1300px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-[674px] font-[Neighbor] font-semibold text-[66px] leading-[103%] tracking-[-0.02em]"
                    >
                        The comparison <span className="text-pink-400">site</span> that puts you first
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="w-[448px] font-[Geist] text-[18px] leading-[131%] tracking-[-0.02em]"
                    >
                        We make comparing simple, transparent, and stress-free — no hidden agendas,
                        just clear choices designed to help you save time and money.
                    </motion.p>
                </div>

                {/* (keep your remaining sections unchanged) */}

            </div>
        </motion.div>
    );
};

export default ComparisonSection;
