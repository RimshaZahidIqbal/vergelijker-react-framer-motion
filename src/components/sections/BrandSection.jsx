import React from 'react';
// Assuming Logo1 and Logo2 are actual React components (or SVG/PNG imports handled correctly)
import { Logo1, Logo2 } from '../../assets';

const initialIcons = [
    { id: 1, icon: Logo1 },
    { id: 2, icon: Logo2 },
];

const duplicatedIcons = [
    ...initialIcons.map(icon => ({ ...icon, key: `a-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `b-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `c-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `d-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `e-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `f-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `g-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `h-${icon.id}` })),
];

const BrandSection = () => {
    return (
        <div className="py-12 mb-20">
            <h4 className="font-[Neighbor] font-bold text-base leading-[150%] tracking-normal text-center mb-10">
                "We work with the Netherlands' most trusted Brands"
            </h4>

            <div className="relative overflow-hidden w-full h-20">
                <div className="absolute z-10 top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent"></div>
                <div className="absolute z-10 top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent"></div>

                <div className="marquee-content flex gap-16 absolute left-0 h-full items-center">
                    {duplicatedIcons.map((item) => (
                        <div

                            key={item.key}
                            className="flex-shrink-0 flex items-center justify-center w-28 h-7 text-gray-700 "
                        >
                            <img
                                src={item.icon}
                                alt={`Brand Logo ${item.id}`}
                                className="w-full  h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrandSection;