/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                geist: ["Geist", "sans-serif"],
                neighbor: ["Neighbor", "sans-serif"],
            },
        },
    },
    plugins: [],
};
