module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            blue: "#00a1e2",
            black: "#110a0d",
            white: "#fff"
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'),],
}
