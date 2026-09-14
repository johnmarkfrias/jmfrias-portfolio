export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: { 'content': '1440px' },
      padding: {
        'section-y-mobile': '50px',
        'section-y-tablet': '80px',
        'section-y-laptop': '100px',
        'section-y-desktop': '120px',
      },
    },
  },
}