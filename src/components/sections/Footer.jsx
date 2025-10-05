import React, { useState } from "react";
import FooterTopSection from "./FooterTopSection";
import RoundedButton from "../ui/RoundedButton";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { VectorImage } from "../../assets";

// Mobile Accordion
const FooterAccordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/20">
            <button
                className="w-full flex items-center justify-between py-3"
                onClick={() => setOpen(!open)}
            >
                <span className="font-semibold">{title}</span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="pb-3">{children}</div>
            </div>
        </div>
    );
};

// Reusable section
const FooterSection = ({ title, items }) => (
    <div>
        <h3 className="font-semibold mb-3">{title}</h3>
        <ul className="space-y-2 text-white/80">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const sections = {
        Compare: [
            "Car Insurance",
            "Home Insurance",
            "Travel Insurance",
            "Energy Plans",
            "Mobile & Internet",
            "Banking & Loans",
            "All Categories",
        ],
        Learn: [
            "Insurance Guide",
            "Energy Saving Tips",
            "Financial Planning",
            "How Comparison Works",
            "Consumer Rights",
            "Market News",
        ],
        About: [
            "Our Story",
            "Why We're Independent",
            "How We Make Money",
            "Press & Media",
            "Careers",
            "Awards & Recognition",
        ],
        Support: [
            "Help Center",
            "Contact Us",
            "Live Chat",
            "FAQs",
            "Filing a Complaint",
            "Feedback",
        ],
    };

    return (
        <div className="relative flex flex-col items-center w-full">
            {/* Top Floating Section */}
            <div className="absolute w-full top-0 left-0 flex justify-center z-10">
                <FooterTopSection />
            </div>
            <div className="w-full h-[380px]" />

            {/* Main Footer */}
            <div className="w-full bg-[#0C0C0C] rounded-3xl py-12 px-6 relative text-white/80 overflow-hidden">
                {/* Newsletter + Buttons */}
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-12 relative z-10">

                    <div className="flex flex-between gap-5">

                        {["Home", "Blogs", "Vergelijkingen", "Over ons"].map((text, i) => (
                            <RoundedButton
                                key={i}
                                text={text}
                                className="min-w-[140px] md:min-w-[160px] text-xs sm:text-sm md:text-lg border border-white/80 text-white/80 hover:border-white/70"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent border-b border-white/40 px-3 py-2 flex-1 min-w-[200px] focus:outline-none focus:border-white/80"
                        />
                        <button className="hover:bg-white/5 px-4 py-2 flex items-center justify-center transition">
                            <ArrowRight className="w-5 h-5 -rotate-45  hover:rotate-0 transition-transform" />
                        </button>
                    </div>
                </div>

                <hr className="border-white/20 mb-8" />

                {/* Mobile Accordion */}
                <div className="block md:hidden mb-12 relative z-10">
                    {Object.entries(sections).map(([title, items]) => (
                        <FooterAccordion key={title} title={title}>
                            <ul className="space-y-2 text-white/80">{items.map((i, j) => <li key={j}>{i}</li>)}</ul>
                        </FooterAccordion>
                    ))}
                    <FooterAccordion title="Contact Information">
                        <div className="space-y-2 text-white/80">
                            <p><span className="font-semibold">Address:</span> Amsterdam, Netherlands</p>
                            <p><span className="font-semibold">Phone:</span> 020-123-4567</p>
                            <p><span className="font-semibold">Mail:</span> help@vergelijker.nl</p>
                        </div>
                    </FooterAccordion>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm mb-12 relative z-10">
                    {Object.entries(sections).map(([title, items]) => (
                        <FooterSection key={title} title={title} items={items} />
                    ))}
                    <div>
                        <h3 className="font-semibold mb-3">Contact Information</h3>
                        <p className="text-white/80"><span className="font-semibold">Address:</span> Amsterdam, Netherlands</p>
                        <p className="text-white/80"><span className="font-semibold">Phone:</span> 020-123-4567</p>
                        <p className="text-white/80"><span className="font-semibold">Mail:</span> help@vergelijker.nl</p>
                    </div>
                </div>

                <div className="sticky bottom-0">


                    <img
                        src={VectorImage}
                        alt="vector"
                        className="w-full  h-auto"
                    />

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 relative z-10">
                        <div className="flex gap-4 text-white/70">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                        <p className="text-xs text-white/60">
                            © Copyright 2025, Vergelijker Engels. All Rights Reserved
                        </p>
                    </div>
                </div>
                {/* Background Vector */}
            </div>
        </div>
    );
};

export default Footer;
