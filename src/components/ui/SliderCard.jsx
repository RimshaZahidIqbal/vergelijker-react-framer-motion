import React from "react";

const SliderCard = ({ image, title, description, height }) => {
    return (
        <div className="min-w-[280px] xs:min-w-[300px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[470px] bg-white rounded-2xl overflow-hidden flex-shrink-0">
            <img
                src={image}
                alt={title}
                style={{ height: `${height}px` }}
                className="w-full object-cover"
            />
            <div className="pt-2 flex flex-col gap-2">
                <h3 className="font-normal font-[Neighbor] text-lg xs:text-xl sm:text-2xl text-gray-900">{title}</h3>
                <p className="text-gray-600 line-clamp-2 text-sm xs:text-base">{description}</p>
                <p className="text-green-600 font-[Neighbor] text-xs xs:text-sm sm:text-s font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                    Read More <span className="text-sm xs:text-base">→</span>
                </p>
            </div>
        </div>
    );
};

export default SliderCard;