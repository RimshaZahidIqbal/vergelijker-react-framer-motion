import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

const stats = [
  { id: 1, value: "2.3M+", label: "comparisons completed", tilt: "rotate-6" },
  { id: 2, value: "€12M+", label: "total savings generated", tilt: "rotate-6" },
  { id: 3, value: "150+", label: "providers compared", tilt: "rotate-14" },
  { id: 4, value: "9.4/10", label: "average user rating", tilt: "-rotate-14" },
];

const CompareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full flex flex-col items-center justify-center py-16 relative">
      {/* Top 2 Cards */}
      <div className="grid grid-cols-2 gap-68 mb-12">
        {stats.slice(0, 2).map((stat, index) => (
          <motion.div
            key={stat.id}
            className={`w-[220px] h-[220px] bg-[#F8F8F8] rounded-2xl p-6 text-[#1D5E48] text-center cursor-pointer opacity-100 ${stat.tilt}`}
            initial={{ y: -200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              backgroundColor: "#3B4EDB",
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)",
              color: "#fff",
              transition: { duration: 0.25 },
            }}
          >
            <div className="flex items-center justify-center h-full flex-col">
              <h2 className="font-neighbor font-semibold text-[62px] leading-[100%] tracking-[-0.04em] text-center align-middle">
                {stat.value}
              </h2>
              <p className="font-geist font-normal text-[19px] leading-[100%] tracking-[-0.04em] text-center mt-2">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <p className="font-[Neighbor] font-medium text-[54px] leading-[100%] tracking-[-0.04em] text-center max-w-6xl mb-6">
        We help you find the perfect match in seconds. 100% independent, crystal clear, and designed to make smarter choices effortlessly.
      </p>

      {/* Button */}
      <AnimatedButton />

      {/* Bottom 2 Cards */}
      <div className="grid grid-cols-2 gap-188 mt-8">
        {stats.slice(2, 4).map((stat, index) => (
          <motion.div
            key={stat.id}
            className={`w-[220px] h-[220px] bg-[#F8F8F8] rounded-2xl p-6 text-[#1D5E48] text-center cursor-pointer ${stat.tilt}`}
            initial={{ y: -200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1 + index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              backgroundColor: "#3B4EDB",
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)",
              color: "#fff",
              transition: { duration: 0.25 },
            }}
          >
            <div className="flex items-center justify-center h-full flex-col">
              <h2 className="font-neighbor font-semibold text-[62px] leading-[100%] tracking-[-0.04em] text-center align-middle">
                {stat.value}
              </h2>
              <p className="font-geist font-normal text-[19px] leading-[100%] tracking-[-0.04em] text-center mt-2">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompareSection;
