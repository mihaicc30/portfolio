/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        comet: "comet 12s ease-in infinite forwards",
        spinStar: "spinStar 1s linear infinite",
        spin2: "spin2 8s linear infinite",
        wave1: "wave 10s ease-in-out infinite",
        wave2: "wave 8s ease-in-out infinite",
        wave3: "wave 6s ease-in-out infinite",
        moon: "moon 4s ease-in-out infinite",
        mPulse: "mPulse 1s infinite",
        mBounce: "mBounce 2s ",
        fadeIN: "fadeIN .3s ",
        fadeIN5: "fadeUP2 1.5s ",
        fadeOUT: "fadeOUT .3s forwards",
        fadeUP1: "fadeUP 1s ",
        fadeUP2: "fadeUP",
        fadeUPX: "fadeUP2",
        fadeUP3: "fadeUP 3s ",
        fadeDOWN: "fadeDOWN 1s ",
        fadeDOWN2: "fadeDOWN",
        fadeLEFT1: "fadeLEFT 1s ",
        fadeLEFT2: "fadeLEFT 2s ",
        fadeLEFT3: "fadeLEFT 3s ",
        fadeRIGHT1: "fadeRIGHT 1s ",
        fadeRIGHT2: "fadeRIGHT 2s ",
        fadeRIGHT3: "fadeRIGHT 3s ",
        scaleFromMax: "scaleFromMax .5s ease-out",
      },
      keyframes: {
        comet: {
			"0%": {right: "0%" },
			"10%": {right: "90%", top:"20%", opacity: "0" },
			"20%": {right: "90%", top:"20%", opacity: "0"},
			"100%": {right: "90%", top:"20%", opacity: "0"},
        },
        spinStar: {
			"0%": { transform: "rotateZ(0deg) scale(1)", opacity: "0" },
			"30%": { transform: "rotateZ(0deg) scale(1)", opacity: "0" },
			"50%": { transform: "rotateZ(360deg) scale(1.3)", opacity: "1" },
			"80%": { transform: "rotateZ(0deg) scale(1)", opacity: "0" },
			"100%": { transform: "rotateZ(0deg) scale(1)", opacity: "0" },
        },
        spin2: {
          "50%": { transform: "rotateZ(180deg) rotateX(180deg)" },
          "100%": { transform: "rotateZ(360deg)" },
        },
        wave: {
          "0%": {
            clipPath:
              "polygon(0 86%, 10% 84%, 27% 83%, 42% 81%, 48% 79%, 60% 78%, 69% 78%, 77% 76%, 83% 76%, 91% 79%, 100% 85%, 100% 100%, 0 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0 86%, 9% 80%, 16% 78%, 23% 76%, 30% 76%, 37% 78%, 44% 81%, 57% 84%, 71% 84%, 85% 86%, 100% 85%, 100% 100%, 0 100%)",
          },
          "100%": {
            clipPath:
              "polygon(0 86%, 10% 84%, 27% 83%, 42% 81%, 48% 79%, 60% 78%, 69% 78%, 77% 76%, 83% 76%, 91% 79%, 100% 85%, 100% 100%, 0 100%)",
          },
        },
        moon: {
          "0%": { clipPath: "ellipse(45% 50% at 50% 50%)" },
          "50%": { clipPath: "ellipse(50% 46% at 50% 50%)" },
          "100%": { clipPath: "ellipse(45% 50% at 50% 50%)" },
        },
        scaleFromMax: {
          "0%": { transform: "scale(-10)" },
          "100%": { transform: "scale(1)" },
        },
        mPulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1)", boxShadow: "0 0 0 6px #ff00003b" },
          "100%": { transform: "scale(1)", boxShadow: "0 0 0 0 #ff000000" },
        },
        mBounce: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%": {
            transform: "translateY(-60%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "35%": {
            transform: "translateY(0%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-40%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "70%": {
            transform: "translateY(0%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "90%": {
            transform: "translateY(-20%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateY(0%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        fadeDOWN: {
          "0%": { transform: "translateY(-2rem)", opacity: "0" },
          "100%": { transform: "translateY(0rem)", opacity: "1" },
        },
        fadeUP: {
          "0%": { transform: "translateY(2rem)", opacity: "0" },
          "100%": { transform: "translateY(0rem)", opacity: "1" },
        },
        fadeUP2: {
          "0%": { transform: "translateY(2rem)", opacity: "0" },
          "80%": { transform: "translateY(2rem)", opacity: "0" },
          "100%": { transform: "translateY(0rem)", opacity: "1" },
        },
        fadeIN: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        fadeOUT: {
          "0%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(0)", opacity: "0" },
        },
        fadeLEFT: {
          "0%": { transform: "translateX(2rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        fadeRIGHT: {
          "0%": { transform: "translateX(-2rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
