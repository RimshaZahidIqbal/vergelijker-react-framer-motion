import React from 'react'

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

export default FooterSection