import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom"; // 🔥 Add this line
import logo from "../../assets/logo.png"; // apna logo ka path

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // underline animation variants
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { type: "spring", duration: 0.8, bounce: 0 },
                opacity: { duration: 0.01 },
            },
        },
    };

    // ✅ NavLink Component (uses react-router Link)
    const NavLink = ({ children, to }) => (
        <motion.div
            className="relative font-medium text-black flex flex-col items-start"
            initial="hidden"
            whileHover="visible"
        >
            <Link to={to}>{children}</Link>
            <motion.svg
                width="100%"
                height="4"
                viewBox="0 0 100 4"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 hidden md:block"
            >
                <motion.line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#000000"
                    strokeWidth="2"
                    variants={draw}
                />
            </motion.svg>
        </motion.div>
    );

    return (
        <nav className="w-full bg-white sticky top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="logo"
                    className="w-28 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#">Over ons</NavLink>
                    <NavLink to="#">Vergelijkingen</NavLink>
                    <NavLink to="/blog">Blog</NavLink> {/* 🔥 goes to BlogListingPage */}
                </div>

                {/* Search Bar */}
                <div className="hidden md:block">
                    <input
                        type="text"
                        placeholder="Search product"
                        className="px-3 py-1 rounded-md border border-gray-300"
                    />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <HiX className="w-7 h-7" />
                        ) : (
                            <HiMenu className="w-7 h-7" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-white shadow-md px-6 py-6 space-y-4"
                >
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#">Over ons</NavLink>
                    <NavLink to="#">Vergelijkingen</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
