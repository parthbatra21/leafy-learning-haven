import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our learning platform
				leaf: {
					DEFAULT: '#8BC34A', // Lighter green for leaves
					hover: '#9CCC65',
					active: '#7CB342',
					light: '#C5E1A5',
					dark: '#558B2F'
				},
				branch: {
					DEFAULT: '#795548', // Brown for branches
					glow: '#A1887F',
					dark: '#5D4037'
				},
				sky: {
					DEFAULT: '#E3F2FD', // Light blue for background
					darker: '#BBDEFB',
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				},
				calm: {
					green: '#C8E6C9', // Very soft green
					blue: '#B3E5FC', // Very soft blue
					yellow: '#FFF9C4', // Very soft yellow
					purple: '#E1BEE7', // Very soft purple
					pink: '#F8BBD0', // Very soft pink
				},
				wood: {
					light: '#D7CCC8',
					DEFAULT: '#A1887F',
					dark: '#795548',
				},
				// Science theme colors
				science: {
					beaker: '#8ED1FC',
					flask: '#00D084',
					atom: '#0693E3',
					dna: '#9900EF',
					microscope: '#FF6900',
					lab: '#EEEEEE',
					chemical: '#00B8D9',
					experiment: '#36B37E',
					research: '#0052CC',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'lab-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
				'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
				'science-bg': 'radial-gradient(circle at 50% 50%, rgba(6, 147, 227, 0.1) 0%, rgba(155, 81, 224, 0.1) 100%)',
				'lab-bench': 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',
				'dna-pattern': 'repeating-linear-gradient(45deg, rgba(155, 0, 239, 0.1) 0px, rgba(155, 0, 239, 0.1) 10px, transparent 10px, transparent 20px)',
				'chemical-gradient': 'linear-gradient(to right, rgba(142, 209, 252, 0.2), rgba(0, 208, 132, 0.2), rgba(155, 0, 239, 0.2))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'sway': {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(5deg)' },
					'50%': { transform: 'translateY(5px) rotate(-5deg)' },
					'75%': { transform: 'translateY(-5px) rotate(2deg)' },
				},
				'bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				flame: {
					'0%': { transform: 'scaleY(1) skew(2deg)', opacity: '0.8' },
					'50%': { transform: 'scaleY(1.2) skew(-3deg)', opacity: '1' },
					'100%': { transform: 'scaleY(1) skew(2deg)', opacity: '0.8' },
				},
				rise: {
					'0%': { bottom: '0%', opacity: '1' },
					'100%': { bottom: '100%', opacity: '0' },
				},
				'slide-movement': {
					'0%': { transform: 'translateX(-10%)' },
					'50%': { transform: 'translateX(10%)' },
					'100%': { transform: 'translateX(-10%)' },
				},
				'element-float': {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' },
					'100%': { transform: 'translateY(0) rotate(0deg)' },
				},
				'electron-trail': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' },
				},
				twinkle: {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' },
				},
				shoot: {
					'0%': { transform: 'translateX(-100%) translateY(-100%)', opacity: '1' },
					'100%': { transform: 'translateX(200%) translateY(200%)', opacity: '0' },
				},
				orbit: {
					'from': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
					'to': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
				},
				'dna-rotate': {
					'0%': { transform: 'translateX(-50%) rotate(0deg)' },
					'50%': { transform: 'translateX(-50%) rotate(180deg)' },
					'100%': { transform: 'translateX(-50%) rotate(360deg)' },
				},
				'bubble-pop': {
					'0%': { transform: 'scale(0.8)', opacity: '0.5' },
					'50%': { transform: 'scale(1.2)', opacity: '0.8' },
					'100%': { transform: 'scale(0.8)', opacity: '0.5' },
				},
				'chemical-reaction': {
					'0%': { backgroundColor: 'rgba(59, 130, 246, 0.3)' },
					'33%': { backgroundColor: 'rgba(16, 185, 129, 0.3)' },
					'66%': { backgroundColor: 'rgba(217, 70, 239, 0.3)' },
					'100%': { backgroundColor: 'rgba(59, 130, 246, 0.3)' },
				},
				'lab-equipment-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
					'50%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' },
				},
				'molecule-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
				},
				'beaker-bubble': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'50%': { transform: 'translateY(50%)', opacity: '0.8' },
					'100%': { transform: 'translateY(0%)', opacity: '0' },
				},
				'atom-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'electron-orbit': {
					'0%': { transform: 'rotate(0deg) translateX(12px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(12px) rotate(-360deg)' },
				},
				'microscope-focus': {
					'0%, 100%': { transform: 'scale(1)', filter: 'blur(0px)' },
					'50%': { transform: 'scale(1.05)', filter: 'blur(1px)' },
				},
				'test-tube-fizz': {
					'0%': { height: '20%', opacity: '0.7' },
					'50%': { height: '60%', opacity: '0.9' },
					'100%': { height: '20%', opacity: '0.7' },
				},
				'dna-helix': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' },
				},
				'chemical-drop': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'50%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(0)', opacity: '0' },
				},
				'lab-pulse': {
					'0%, 100%': { boxShadow: '0 0 0 rgba(142, 209, 252, 0.4)' },
					'50%': { boxShadow: '0 0 20px rgba(142, 209, 252, 0.8)' },
				},
				'liquid-wave': {
					'0%': { transform: 'translateX(0) rotate(0deg)' },
					'50%': { transform: 'translateX(25%) rotate(2deg)' },
					'100%': { transform: 'translateX(0) rotate(0deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
				'sway': 'sway 6s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'bounce': 'bounce 2s ease-in-out infinite',
				'flame': 'flame 0.8s ease-in-out infinite',
				'flame-delayed': 'flame 0.8s ease-in-out infinite 0.4s',
				'rise': 'rise 3s linear infinite',
				'slide-movement': 'slide-movement 8s ease-in-out infinite',
				'element-float': 'element-float 6s ease-in-out infinite',
				'electron-trail': 'electron-trail 2s linear infinite',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'shoot': 'shoot 2s linear',
				'orbit': 'orbit linear infinite',
				'dna-rotate': 'dna-rotate 4s ease-in-out infinite',
				'bubble-pop': 'bubble-pop 2s ease-out infinite',
				'chemical-reaction': 'chemical-reaction 5s linear infinite',
				'lab-equipment-glow': 'lab-equipment-glow 3s ease-in-out infinite',
				'molecule-bounce': 'molecule-bounce 3s ease-in-out infinite',
				'beaker-bubble': 'beaker-bubble 2.5s ease-in-out infinite',
				'atom-spin': 'atom-spin 8s linear infinite',
				'electron-orbit': 'electron-orbit 2s linear infinite',
				'microscope-focus': 'microscope-focus 4s ease-in-out infinite',
				'test-tube-fizz': 'test-tube-fizz 3s ease-in-out infinite',
				'dna-helix': 'dna-helix 10s linear infinite',
				'chemical-drop': 'chemical-drop 2s ease-in infinite',
				'lab-pulse': 'lab-pulse 4s ease-in-out infinite',
				'liquid-wave': 'liquid-wave 4s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

