/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        green: {
          900: "#0c3b2e",
          800: "#146a4f",
          600: "#1ea36f"
        },
        orange: {
          400: "#ff8a3d",
          500: "#ff6b00"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
}
