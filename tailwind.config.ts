import type { Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config
