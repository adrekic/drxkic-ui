const NUMBER_OF_COLOR_STEPS = 12

export const generateCssVarMapping = (fromName: string, toName: string) => {
	return Array.from(Array(NUMBER_OF_COLOR_STEPS)).reduce(
		(accumulator, _currentValue, index) => {
			const indexPlus1 = index + 1

			return {
				...accumulator,
				[`--${fromName}-${indexPlus1}`]: `var(--${toName}-${indexPlus1})`,
				[`--${fromName}-a${indexPlus1}`]: `var(--${toName}-a${indexPlus1})`,
			}
		},
		{
			[`--${fromName}-contrast`]: `var(--${toName}-contrast)`,
			[`--${fromName}-surface`]: `var(--${toName}-surface)`,
			[`--${fromName}-indicator`]: `var(--${toName}-indicator)`,
			[`--${fromName}-track`]: `var(--${toName}-track)`,
		},
	)
}
