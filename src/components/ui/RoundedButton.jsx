import React from "react";

const RoundedButton = ({ text, className = "", ...props }) => {
    return (
        <button
            className={`px-6 py-3 rounded-full font-medium transition duration-300 hover:scale-105 ${className}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default RoundedButton;
