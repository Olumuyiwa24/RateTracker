export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          slide: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
        },
        animation: {
          slide: "slide 4s linear infinite",
        },
      },
    },
    plugins: [],
  };