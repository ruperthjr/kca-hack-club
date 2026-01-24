import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'glow-pulse': 'glowPulse 3s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
} satisfies Config;