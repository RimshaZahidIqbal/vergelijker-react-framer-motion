import React from "react";
import { useNavigate } from "react-router-dom";

const SliderCard = ({ image, title, description, height }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/blogdetail");
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer duration-300 h-full flex flex-col"
        >
            <img
                src={image}
                alt={title}
                className="w-full object-cover rounded-t-2xl overflow-hidden transition-transform duration-500 ease-[cubic-bezier(.7,0,.3,1)] hover:scale-105"
                style={{ height: `${height}px` }}
            />

            <div className="flex flex-col gap-2 px-3 py-4 flex-grow">
                <h3 className="font-[Neighbor] text-lg sm:text-xl text-gray-900 line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 line-clamp-2 text-sm sm:text-base">
                    {description}
                </p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                    }}
                    className="text-green-600 font-[Neighbor] text-sm mt-auto inline-flex items-center gap-1 hover:underline"
                >
                    Read More →
                </button>
            </div>
        </div>
    );
};

export default SliderCard;
