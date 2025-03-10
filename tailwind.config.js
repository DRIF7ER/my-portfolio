/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
        permanent: ['Permanent Marker', 'cursive']
      },
    },
  },
  plugins: [],
}

