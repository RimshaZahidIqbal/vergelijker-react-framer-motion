import React from "react";
import FooterTopSection from "./FooterTopSection";
import RoundedButton from "../ui/RoundedButton";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { VectorImage } from "../../assets";
import FooterAccordion from "../ui/FooterAccordion";
import FooterSection from "../ui/FooterSection";
import Spacer from "../ui/Spacer";

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
        <div className="relative flex flex-col items-center w-full ">

            <footer className="relative w-full p-2 bg-[#0C0C0C] rounded-t-3xl text-white/80 m-3 mx-4 md:p-12 xl:p-24 overflow-hidden z-20">
                {/* Buttons Row */}
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-12">
                    <div className="flex  justify-center md:justify-between gap-5 flex-wrap font-normal leading-[1.5] ">
                        {["Home", "Blogs", "Vergelijkingen", "Over ons"].map((text, i) => (
                            <RoundedButton
                                key={i}
                                text={text}
                                className="min-w-[140px] md:min-w-[160px] py-3 text-xs sm:text-sm md:text-lg border border-white/80 text-white/80 hover:border-white/70"
                            />
                        ))}
                    </div>

                    {/* Email Subscribe */}
                    <div className="flex flex-row items-end gap-2 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent border-b border-white/40 px-3 py-2 flex-1 min-w-[200px] focus:outline-none focus:border-white/80"
                        />
                        <button className="hover:bg-white/5 px-4 py-2 flex items-center justify-center transition ">
                            <ArrowRight className="w-5 h-5 -rotate-45 hover:rotate-0 transition-transform" />
                        </button>
                    </div>
                </div>

                <hr className="md:border-white/20 mb-8 hidden " />

                {/* Mobile Accordion */}
                <div className="block md:hidden mb-12">
                    {Object.entries(sections).map(([title, items]) => (
                        <FooterAccordion key={title} title={title}>
                            <ul className="space-y-2 text-white/80 font-medium ">
                                {items.map((i, j) => (
                                    <li key={j}>{i}</li>
                                ))}
                            </ul>
                        </FooterAccordion>
                    ))}
                    <FooterAccordion title="Contact Information">
                        <div className="space-y-2 text-white/80 font-medium">
                            <p>
                                <span className="font-semibold">Address:</span> Amsterdam, Netherlands
                            </p>
                            <p>
                                <span className="font-semibold">Phone:</span> 020-123-4567
                            </p>
                            <p>
                                <span className="font-semibold">Mail:</span> help@vergelijker.nl
                            </p>
                        </div>
                    </FooterAccordion>
                </div>

                {/* Desktop Footer Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm mb-12">
                    {Object.entries(sections).map(([title, items]) => (
                        <FooterSection key={title} title={title} items={items} />
                    ))}
                    <div>
                        <h3 className="!font-semibold text-xl leading-14 text-white mb-3 space-y-2">Contact Information</h3>
                        <p className="text-white/80 pb-2">
                            <span className="font-semibold">Address:</span> Amsterdam, Netherlands
                        </p>
                        <p className="text-white/80 pb-2">
                            <span className="font-semibold">Phone:</span> 020-123-4567
                        </p>
                        <p className="text-white/80 pb-2">
                            <span className="font-semibold">Mail:</span> help@vergelijker.nl
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6">
                    <img src={VectorImage} alt="vector" className="w-full h-auto mb-6" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-6 justify-center items-center">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0C0C0C] text-white ring-1 ring-white hover:scale-110 transition"><Icon /></a>
                            ))}
                        </div>


                        <p className="text-xs text-white/60 md:text-lg">
                            © Copyright {new Date().getFullYear()}, Vergelijker Engels. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
