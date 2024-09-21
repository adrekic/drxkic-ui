import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import drxkicuiConfig from "./drxkicui.config"
import { generateCssColorVars } from "./src/utils/generateCssColorVars"
import { generateRadixColors } from "./src/utils/generateRadixColors"

const { accent, base, lightBackground, darkBackground } = drxkicuiConfig

const lightRadixColors = generateRadixColors({
	appearance: "light",
	accent: accent,
	gray: base,
	background: lightBackground,
})

const lightAccentCssColorVars = generateCssColorVars({
	name: "accent",
	scale: lightRadixColors.accentScale,
	alphaScale: lightRadixColors.accentScaleAlpha,
	scaleWideGamut: lightRadixColors.accentScaleWideGamut,
	alphaScaleWideGamut: lightRadixColors.accentScaleAlphaWideGamut,
	contrast: lightRadixColors.accentContrast,
	surface: lightRadixColors.accentSurface,
	surfaceWideGamut: lightRadixColors.accentSurfaceWideGamut,
})

const lightBaseCssColorVars = generateCssColorVars({
	name: "base",
	scale: lightRadixColors.grayScale,
	alphaScale: lightRadixColors.grayScaleAlpha,
	scaleWideGamut: lightRadixColors.grayScaleWideGamut,
	alphaScaleWideGamut: lightRadixColors.grayScaleAlphaWideGamut,
	contrast: "#FFFFFF",
	surface: lightRadixColors.graySurface,
	surfaceWideGamut: lightRadixColors.graySurfaceWideGamut,
})

const darkRadixColors = generateRadixColors({
	appearance: "dark",
	accent: accent,
	gray: base,
	background: darkBackground,
})

const darkAccentCssColorVars = generateCssColorVars({
	name: "accent",
	scale: darkRadixColors.accentScale,
	alphaScale: darkRadixColors.accentScaleAlpha,
	scaleWideGamut: darkRadixColors.accentScaleWideGamut,
	alphaScaleWideGamut: darkRadixColors.accentScaleAlphaWideGamut,
	contrast: darkRadixColors.accentContrast,
	surface: darkRadixColors.accentSurface,
	surfaceWideGamut: darkRadixColors.accentSurfaceWideGamut,
})

const darkBaseCssColorVars = generateCssColorVars({
	name: "base",
	scale: darkRadixColors.grayScale,
	alphaScale: darkRadixColors.grayScaleAlpha,
	scaleWideGamut: darkRadixColors.grayScaleWideGamut,
	alphaScaleWideGamut: darkRadixColors.grayScaleAlphaWideGamut,
	contrast: "#FFFFFF",
	surface: darkRadixColors.graySurface,
	surfaceWideGamut: darkRadixColors.graySurfaceWideGamut,
})

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			spacing: {
				"0.25": "0.0625rem",
			},
		},
		colors: {
			accent: {
				1: "var(--accent-1)",
				2: "var(--accent-2)",
				3: "var(--accent-3)",
				4: "var(--accent-4)",
				5: "var(--accent-5)",
				6: "var(--accent-6)",
				7: "var(--accent-7)",
				8: "var(--accent-8)",
				9: "var(--accent-9)",
				10: "var(--accent-10)",
				11: "var(--accent-11)",
				12: "var(--accent-12)",
				a1: "var(--accent-a1)",
				a2: "var(--accent-a2)",
				a3: "var(--accent-a3)",
				a4: "var(--accent-a4)",
				a5: "var(--accent-a5)",
				a6: "var(--accent-a6)",
				a7: "var(--accent-a7)",
				a8: "var(--accent-a8)",
				a9: "var(--accent-a9)",
				a10: "var(--accent-a10)",
				a11: "var(--accent-a11)",
				a12: "var(--accent-a12)",
				contrast: "var(--accent-contrast)",
				surface: "var(--accent-surface)",
				indicator: "var(--accent-indicator)",
				track: "var(--accent-track)",
			},
			base: {
				1: "var(--base-1)",
				2: "var(--base-2)",
				3: "var(--base-3)",
				4: "var(--base-4)",
				5: "var(--base-5)",
				6: "var(--base-6)",
				7: "var(--base-7)",
				8: "var(--base-8)",
				9: "var(--base-9)",
				10: "var(--base-10)",
				11: "var(--base-11)",
				12: "var(--base-12)",
				a1: "var(--base-a1)",
				a2: "var(--base-a2)",
				a3: "var(--base-a3)",
				a4: "var(--base-a4)",
				a5: "var(--base-a5)",
				a6: "var(--base-a6)",
				a7: "var(--base-a7)",
				a8: "var(--base-a8)",
				a9: "var(--base-a9)",
				a10: "var(--base-a10)",
				a11: "var(--base-a11)",
				a12: "var(--base-a12)",
				contrast: "var(--base-contrast)",
				surface: "var(--base-surface)",
				indicator: "var(--base-indicator)",
				track: "var(--base-track)",
			},
			background: "var(--color-background)",
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				':root[data-mode="light"]': {
					...lightAccentCssColorVars.default,
					...lightBaseCssColorVars.default,
					"--color-background": lightRadixColors.background,
				},
				':root[data-mode="dark"]': {
					...darkAccentCssColorVars.default,
					...darkBaseCssColorVars.default,
					"--color-background": darkRadixColors.background,
				},
				"@supports (color: color(display-p3 1 1 1))": {
					"@media (color-gamut: p3)": {
						':root[data-mode="light"]': {
							...lightAccentCssColorVars.wideGamut,
							...lightBaseCssColorVars.wideGamut,
							"--color-background": lightRadixColors.background,
						},
						':root[data-mode="dark"]': {
							...darkAccentCssColorVars.wideGamut,
							...darkBaseCssColorVars.wideGamut,
							"--color-background": darkRadixColors.background,
						},
					},
				},
			})
		}),
	],
} satisfies Config
