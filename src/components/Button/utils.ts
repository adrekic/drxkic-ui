import { cva } from "class-variance-authority"

export const interactive = cva(
	[
		"outline-0",
		"transition-colors",
		"focus-visible:ring-2",
		"ring-[--accent-a7]",
		"disabled:opacity-50",
		"disabled:pointer-events-none",
	],
	{
		variants: {
			variant: {
				solid: [
					"bg-[--accent-9]",
					"hover:bg-[--accent-10]",
					"text-[--accent-contrast]",
					"active:brightness-110",
				],
				soft: [
					"bg-[--accent-a3]",
					"hover:bg-[--accent-a4]",
					"active:bg-[--accent-a5]",
					"text-[--accent-a11]",
				],
				ghost: [
					"bg-transparent",
					"hover:bg-[--accent-a3]",
					"active:bg-[--accent-a4]",
					"text-[--accent-a11]",
				],
				surface: [
					"box-border",
					"bg-[--accent-a3]",
					"hover:bg-[--accent-a4]",
					"active:bg-[--accent-a5]",
					"border border-[--accent-7]",
					"text-[--accent-a11]",
				],

				outline: [
					"box-border",
					"bg-transparent",
					"border border-[--accent-7]",
					"hover:border-[--accent-8]",
					"hover:bg-[--accent-a3]",
					"active:bg-[--accent-a4]",
					"text-[--accent-a11]",
				],
			},
		},
		defaultVariants: {
			variant: "solid",
		},
	},
)

export const button = cva(["flex", "items-center", "gap-1", "rounded"], {
	variants: {
		icon: {
			true: ["justify-center"],
			false: [],
		},
		size: {
			xs: ["h-5", "text-xs", "gap-0.25"],
			sm: ["h-6", "text-sm", "gap-0.5"],
			md: ["h-7", "text-base"],
			lg: ["h-8", "text-base"],
			xl: ["h-10", "text-lg"],
		},
	},
	compoundVariants: [
		{
			icon: true,
			size: "xs",
			class: "w-5",
		},
		{
			icon: true,
			size: "sm",
			class: "w-6",
		},
		{
			icon: true,
			size: "md",
			class: "w-7",
		},
		{
			icon: true,
			size: "lg",
			class: "w-8",
		},
		{
			icon: true,
			size: "xl",
			class: "w-10",
		},
		{
			icon: false,
			size: "xs",
			class: "px-1",
		},
		{
			icon: false,
			size: "sm",
			class: "px-2",
		},
		{
			icon: false,
			size: "md",
			class: "px-3",
		},
		{
			icon: false,
			size: "lg",
			class: "px-4",
		},
		{
			icon: false,
			size: "xl",
			class: "px-6",
		},
	],
	defaultVariants: {
		size: "md",
		icon: false,
	},
})
