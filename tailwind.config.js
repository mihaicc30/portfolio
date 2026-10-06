/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        inksoft: 'var(--ink-soft)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        accenttint: 'var(--accent-tint)',
      },
      maxWidth: {
        content: '1080px',
      },
    },
  },
  plugins: [],
}
