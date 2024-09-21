interface ColorPaletteProps {
	name: string
	scale: string[]
	alphaScale: string[]
	scaleWideGamut: string[]
	alphaScaleWideGamut: string[]
	contrast: string
	surface: string
	surfaceWideGamut: string
}

export const generateCssColorVars = (props: ColorPaletteProps) => {
	const {
		name,
		scale,
		alphaScale,
		scaleWideGamut,
		alphaScaleWideGamut,
		contrast,
		surface,
		surfaceWideGamut,
	} = props

	return {
		default: {
			...scale.reduce(
				(acc, cum, currentIndex) => ({
					...acc,
					[`--${name}-${currentIndex + 1}`]: cum,
				}),
				{},
			),
			...alphaScale.reduce(
				(acc, cum, currentIndex) => ({
					...acc,
					[`--${name}-a${currentIndex + 1}`]: cum,
				}),
				{},
			),
			[`--${name}-contrast`]: contrast,
			[`--${name}-surface`]: surface,
			[`--${name}-indicator`]: scale[8],
			[`--${name}-track`]: scale[8],
		},
		wideGamut: {
			...scaleWideGamut.reduce(
				(acc, cum, currentIndex) => ({
					...acc,
					[`--${name}-${currentIndex + 1}`]: cum,
				}),
				{},
			),
			...alphaScaleWideGamut.reduce(
				(acc, cum, currentIndex) => ({
					...acc,
					[`--${name}-a${currentIndex + 1}`]: cum,
				}),
				{},
			),
			[`--${name}-contrast`]: contrast,
			[`--${name}-surface`]: surfaceWideGamut,
			[`--${name}-indicator`]: scaleWideGamut[8],
			[`--${name}-track`]: scaleWideGamut[8],
		},
	}
}
