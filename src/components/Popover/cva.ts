import { cva } from "class-variance-authority"

export const popover = cva(
	[
		"dark:shadow-dark-5",
		"shadow-light-5",
		"border",
		"border-[--base-6]",
		"rounded",
		"bg-[--color-background]",
		"dark:bg-[--base-3]",
		"text-[--base-12]",
	],
	{
		variants: {},
	},
)
