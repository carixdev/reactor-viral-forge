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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				glass: {
					container: 'var(--glass-container)',
					card: 'var(--glass-card)',
					sidebar: 'var(--glass-sidebar)',
					button: 'var(--glass-button)',
					border: 'var(--glass-border)',
					intense: 'var(--glass-intense)',
					backdrop: 'var(--glass-backdrop)'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-subtle': 'var(--gradient-subtle)'
			},
			boxShadow: {
				'glow-primary': 'var(--glow-primary)',
				'glow-accent': 'var(--glow-accent)',
				'glow-core': 'var(--glow-core)'
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'inter': ['Inter', 'sans-serif']
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
				'glow': 'var(--transition-glow)'
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
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: 'var(--glow-primary)',
						transform: 'scale(1)' 
					},
					'50%': { 
						boxShadow: 'var(--glow-core)',
						transform: 'scale(1.02)' 
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'loader-progress': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'logo-appear': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'loader-progress': 'loader-progress 3s ease-out',
				'logo-appear': 'logo-appear 1s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
