
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'spartan': ['League Spartan', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'vr-dark': 'hsl(var(--vr-dark))',
				'vr-darker': 'hsl(var(--vr-darker))',
				'vr-neon': 'hsl(var(--vr-neon))',
				'vr-blue-dark': 'hsl(var(--vr-blue-dark))',
				'vr-blue-light': 'hsl(var(--vr-blue-light))',
				'vr-purple': 'hsl(var(--vr-purple))',
				'inmersial-dark-blue': '#082c74',
				'inmersial-light-blue': '#64adf2',
				'inmersial-cyan-light': '#6eeef9',
				'inmersial-cyan': '#74fdff',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(135deg, rgba(5, 12, 29, 0.9), rgba(0, 0, 0, 0.95))',
				'neon-glow': 'linear-gradient(90deg, rgba(30, 174, 219, 0), rgba(30, 174, 219, 0.5), rgba(30, 174, 219, 0))',
				'card-gradient': 'linear-gradient(145deg, rgba(23, 33, 51, 0.8), rgba(7, 14, 29, 0.9))',
				'inmersial-gradient': 'linear-gradient(135deg, #082c74 0%, #64adf2 100%)',
				'inmersial-button': 'linear-gradient(90deg, #64adf2 0%, #6eeef9 100%)',
			},
			boxShadow: {
				'neon': '0 0 5px rgba(30, 174, 219, 0.7), 0 0 10px rgba(30, 174, 219, 0.5)',
				'neon-strong': '0 0 10px rgba(30, 174, 219, 0.9), 0 0 20px rgba(30, 174, 219, 0.7)',
				'inner-neon': 'inset 0 0 5px rgba(30, 174, 219, 0.7), inset 0 0 10px rgba(30, 174, 219, 0.5)',
				'inmersial': '0 0 5px rgba(100, 173, 242, 0.7), 0 0 10px rgba(100, 173, 242, 0.5)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 5px rgba(100, 173, 242, 0.7), 0 0 10px rgba(100, 173, 242, 0.5)'
                    },
                    '50%': { 
                        boxShadow: '0 0 10px rgba(100, 173, 242, 0.9), 0 0 20px rgba(100, 173, 242, 0.7), 0 0 30px rgba(100, 173, 242, 0.5)'
                    }
                },
                'rotate-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'rotate-slow': 'rotate-slow 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
