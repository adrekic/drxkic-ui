import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button.tsx"
import { HiPlus } from "react-icons/hi2"

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

const sizes = ["xs", "sm", "md", "lg"] as const
const variants = ["solid", "soft", "outline", "surface", "ghost"] as const

export const Basic: Story = {
	render: (args) => {
		const children = args.children || "Button"
		return (
			<div className="flex gap-2 flex-col">
				{sizes.map((size) => (
					<div className="flex gap-2" key={size}>
						{variants.map((variant) => (
							<Button
								variant={variant}
								key={variant}
								size={size}
								{...args}
							>
								{children}
							</Button>
						))}
					</div>
				))}
			</div>
		)
	},
}

export const IconButtons: Story = {
	...Basic,
	args: {
		icon: true,
		children: <HiPlus />,
	},
}

export const WithIcons: Story = {
	...Basic,
	args: {
		children: (
			<>
				<HiPlus />
				Button
			</>
		),
	},
}

export const Disabled: Story = {
	...Basic,
	args: {
		disabled: true,
	},
}
