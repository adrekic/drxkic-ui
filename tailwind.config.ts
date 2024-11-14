import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import drxkicuiConfig from "./drxkicui.config"
import { generateCssColorVars } from "./src/utils/generateCssColorVars"
import { generateRadixColors } from "./src/utils/generateRadixColors"
import { generateCssVarMapping } from "./src/utils/generateAccentCssVarMapping"

const { base, lightBackground, darkBackground, colors } = drxkicuiConfig

interface GeneratedCssColorResults {
	default: object
	wideGamut: object
}

export const cssColorVars = Object.entries(colors).reduce(
	(accumulator, currentValue) => {
		const [name, hex] = currentValue

		const lightRadixColors = generateRadixColors({
			appearance: "light",
			accent: hex,
			gray: base,
			background: lightBackground,
		})

		const darkRadixColors = generateRadixColors({
			appearance: "dark",
			accent: hex,
			gray: base,
			background: darkBackground,
		})

		return {
			...accumulator,
			[name]: {
				light: generateCssColorVars({
					name: name,
					scale: lightRadixColors.accentScale,
					alphaScale: lightRadixColors.accentScaleAlpha,
					scaleWideGamut: lightRadixColors.accentScaleWideGamut,
					alphaScaleWideGamut:
						lightRadixColors.accentScaleAlphaWideGamut,
					contrast: lightRadixColors.accentContrast,
					surface: lightRadixColors.accentSurface,
					surfaceWideGamut: lightRadixColors.accentSurfaceWideGamut,
				}),
				dark: generateCssColorVars({
					name: name,
					scale: darkRadixColors.accentScale,
					alphaScale: darkRadixColors.accentScaleAlpha,
					scaleWideGamut: darkRadixColors.accentScaleWideGamut,
					alphaScaleWideGamut:
						darkRadixColors.accentScaleAlphaWideGamut,
					contrast: darkRadixColors.accentContrast,
					surface: darkRadixColors.accentSurface,
					surfaceWideGamut: darkRadixColors.accentSurfaceWideGamut,
				}),
				accentMapping: generateCssVarMapping("accent", name),
			},
		}
	},
	{} as Record<
		string,
		{
			light: GeneratedCssColorResults
			dark: GeneratedCssColorResults
			accentMapping: object
		}
	>,
)

const lightRadixColors = generateRadixColors({
	appearance: "light",
	accent: base,
	gray: base,
	background: lightBackground,
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
	accent: base,
	gray: base,
	background: darkBackground,
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

export const cssVarMappings = Object.entries(cssColorVars).reduce(
	(accumulator, [name, cssColorVars]) => {
		return {
			...accumulator,
			[`[data-accent-color="${name}"]`]: cssColorVars.accentMapping,
		}
	},
	{},
)

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			spacing: {
				"0.25": "0.0625rem",
			},
			boxShadow: {
				"light-1": `inset 0 1.5px 2px 0 var(--black-a2), 
							inset 0 1.5px 2px 0 var(--black-a2)`,
				"light-2": `0 0 0 0.5px var(--black-a1), 
							0 1px 1px 0 var(--black-a2), 
							0 2px 1px -1px var(--black-a1), 
							0 1px 3px 0 var(--black-a1)`,
				"light-3": `0 2px 3px -2px var(--black-a3), 
							0 3px 12px -4px var(--black-a2), 
							0 4px 16px -8px var(--black-a2)`,
				"light-4": `0 8px 40px var(--black-a1), 
							0 12px 32px -16px var(--black-a3)`,
				"light-5": `0 12px 60px var(--black-a3), 
							0 12px 32px -16px var(--black-a5)`,

				"dark-1": `inset 0 -1px 1px 0 var(--black-a3), 
						   inset 0 0 0 1px var(--black-a3), 
						   inset 0 3px 4px 0 var(--black-a5)`,
				"dark-2": ` 
					  0 0 0 0.5px var(--black-a3),
					  0 1px 1px 0 var(--black-a6), 
					  0 2px 1px -1px var(--black-a6), 
					  0 1px 3px 0 var(--black-a5)`,
				"dark-3": `
					  	   0 2px 3px -2px var(--black-a3),
					  	   0 4px 8px -2px var(--black-a5), 
					  	   0 4px 12px -4px var(--black-a7)`,
				"dark-4": `
						   0 8px 40px var(--black-a5),
						   0 8px 24px -12px var(--black-a7)`,
				"dark-5": `
					  0 12px 60px var(--black-a5),
					  0 12px 32px -16px var(--black-a7)`,
			},
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				':root[data-mode="light"]': Object.values(cssColorVars).reduce(
					(accumulator, cssColorVars) => ({
						...accumulator,
						...cssColorVars.light.default,
					}),
					{
						...lightBaseCssColorVars.default,
						"--color-background": lightRadixColors.background,
					},
				),
				':root[data-mode="dark"]': Object.values(cssColorVars).reduce(
					(accumulator, cssColorVars) => ({
						...accumulator,
						...cssColorVars.dark.default,
					}),
					{
						...darkBaseCssColorVars.default,
						"--color-background": darkRadixColors.background,
					},
				),
				"@supports (color: color(display-p3 1 1 1))": {
					"@media (color-gamut: p3)": {
						':root[data-mode="light"]': Object.values(
							cssColorVars,
						).reduce(
							(accumulator, cssColorVars) => ({
								...accumulator,
								...cssColorVars.light.wideGamut,
							}),
							{
								...lightBaseCssColorVars.wideGamut,
								"--color-background":
									lightRadixColors.background,
							},
						),
						':root[data-mode="dark"]': Object.values(
							cssColorVars,
						).reduce(
							(accumulator, cssColorVars) => ({
								...accumulator,
								...cssColorVars.dark.wideGamut,
							}),
							{
								...darkBaseCssColorVars.wideGamut,
								"--color-background":
									darkRadixColors.background,
							},
						),
					},
				},
				...cssVarMappings,
				":root": {
					...cssVarMappings,
				},
			})
		}),
	],
} satisfies Config
