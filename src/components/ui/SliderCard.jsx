import React from "react";

const SliderCard = ({ image, title, description, height }) => {
    return (
        <div className="min-w-[300px] max-w-[470px] bg-white rounded-2xl overflow-hidden  flex-shrink-0">
            <img
                src={image}
                alt={title}
                style={{ height: `${height}px` }} // <-- use inline style
                className="w-full object-cover"
            />
            <div className="pt-2 flex flex-col gap-2">
                <h3 className="font-normal font-[Neighbor] text-2xl text-gray-900">{title}</h3>
                <p className=" text-gray-600 line-clamp-2">{description}</p>
                <p className="text-green-600 font-[Neighbor] text-s font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                    Read More <span className="text-base">→</span>
                </p>
            </div>
        </div>
    );
};

export default SliderCard;
