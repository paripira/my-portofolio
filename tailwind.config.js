/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- MULAI KODE BARU DI SINI ---
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-1': 'fadeIn 0.5s ease-out 0.5s forwards',
        'fade-in-2': 'fadeIn 0.5s ease-out 1s forwards',
        'fade-in-3': 'fadeIn 0.5s ease-out 1.5s forwards',
        'fade-in-4': 'fadeIn 0.5s ease-out 2s forwards',
        'fade-in-5': 'fadeIn 0.5s ease-out 2.5s forwards',
      }
      // --- AKHIR KODE BARU ---
    },
  },
  plugins: [],
}