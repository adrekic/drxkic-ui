import { cva } from "class-variance-authority"

export const interactive = cva(
	[
		"outline-0",
		"transition-colors",
		"focus-visible:ring-2",
		"ring-accent-a7",
		"disabled:opacity-50",
		"disabled:pointer-events-none",
	],
	{
		variants: {
			selected: {
				true: true,
				false: false,
			},
			variant: {
				solid: [
					"bg-accent-9",
					"hover:bg-accent-10",
					"text-accent-contrast",
					"active:brightness-110",
				],
				soft: [
					"bg-accent-a3",
					"hover:bg-accent-a4",
					"active:bg-accent-a5",
					"text-accent-a11",
				],
				ghost: [
					"bg-transparent",
					"hover:bg-accent-a3",
					"active:bg-accent-a4",
					"text-accent-a11",
				],
				surface: [
					"box-border",
					"bg-accent-a3",
					"hover:bg-accent-a4",
					"active:bg-accent-a5",
					"border border-accent-7",
					"text-accent-a11",
				],

				outline: [
					"box-border",
					"bg-transparent",
					"border border-accent-7",
					"hover:border-accent-8",
					"hover:bg-accent-a3",
					"active:bg-accent-a4",
					"text-accent-a11",
				],
			},
		},
		compoundVariants: [
			{
				selected: true,
				variant: "solid",
				class: [
					"outline outline-2",
					"outline-offset-2",
					"outline-accent-9",
				],
			},
			{
				selected: true,
				variant: "soft",
				class: ["bg-accent-a5", "hover:bg-accent-a5"],
			},
			{
				selected: true,
				variant: "surface",
				class: ["bg-accent-a5", "hover:bg-accent-a5"],
			},
			{
				selected: true,
				variant: "outline",
				class: [
					"bg-accent-a4",
					"hover:bg-accent-a4",
					"active:bg-accent-a4",
				],
			},
			{
				selected: true,
				variant: "ghost",
				class: ["bg-accent-a4", "hover:bg-accent-a4"],
			},
		],
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
			xs: ["h-4", "text-xs", "gap-0.25"],
			sm: ["h-6", "text-sm", "gap-0.5"],
			md: ["h-8", "text-base"],
			lg: ["h-10", "text-lg"],
		},
	},
	compoundVariants: [
		{
			icon: true,
			size: "xs",
			class: "w-4",
		},
		{
			icon: true,
			size: "sm",
			class: "w-6",
		},
		{
			icon: true,
			size: "md",
			class: "w-8",
		},
		{
			icon: true,
			size: "lg",
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
			class: "px-4",
		},
		{
			icon: false,
			size: "lg",
			class: "px-6",
		},
	],
	defaultVariants: {
		size: "md",
		icon: false,
	},
})
