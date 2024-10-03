import { cva } from "class-variance-authority"

export const badge = cva(["flex", "items-center", "rounded"], {
	variants: {
		icon: {
			true: ["justify-center"],
			false: [],
		},
		size: {
			sm: ["h-5", "text-xs", "gap-0.25"],
			md: ["h-6", "text-sm", "gap-0.5"],
			lg: ["h-7", "text-base", "gap-1"],
			xl: ["h-8", "text-lg", "gap-1"],
		},
		variant: {
			solid: ["bg-[--accent-9]", "text-[--accent-contrast]"],
			soft: ["bg-[--accent-a3]", "text-[--accent-11]"],
			outline: [
				"box-border",
				"bg-transparent",
				"border",
				"border-[--accent-7]",
				"text-[--accent-a11]",
			],
			surface: [
				"box-border",
				"bg-[--accent-a3]",
				"border",
				"border-[--accent-7]",
				"text-[--accent-a11]",
			],
		},
	},
	compoundVariants: [
		{
			icon: true,
			size: "sm",
			class: "w-5",
		},
		{
			icon: true,
			size: "md",
			class: "w-6",
		},
		{
			icon: true,
			size: "lg",
			class: "w-7",
		},
		{
			icon: true,
			size: "xl",
			class: "w-8",
		},
		{
			icon: false,
			size: "sm",
			class: "px-1",
		},
		{
			icon: false,
			size: "md",
			class: "px-2",
		},
		{
			icon: false,
			size: "lg",
			class: "px-3",
		},
		{
			icon: false,
			size: "xl",
			class: "px-4",
		},
	],
	defaultVariants: {
		size: "md",
		variant: "solid",
		icon: false,
	},
})
