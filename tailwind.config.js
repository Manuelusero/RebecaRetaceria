/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rebeca-bg': '#FFFAE4',
                'rebeca-bg-secondary': '#FFFFFF',
                'rebeca-nav': '#666666',
                'rebeca-brand': '#B30505',
                'rebeca-subtitle': '#777777',
                'rebeca-dark': '#0F0F0F',
                'rebeca-gray': '#777777',
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'passionone': ['"Passion One"', 'cursive'],
            },
        },
    },
    plugins: [],
}
