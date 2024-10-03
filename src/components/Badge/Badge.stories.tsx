import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"
import React from "react"
import { Colors } from "../../../drxkicui.config.ts"
import { HiFire } from "react-icons/hi"

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

const sizes = ["sm", "md", "lg", "xl"] as const

const variants = ["solid", "soft", "outline", "surface"] as const

export const Basic: Story = {
	render: (args) => {
		const children = args.children || "Badge"
		return (
			<div className="grid grid-cols-2 gap-4">
				{Object.keys(Colors).map((color) => (
					<div className="flex gap-2 flex-col" key={color}>
						{sizes.map((size) => (
							<div className="flex gap-2" key={size}>
								{variants.map((variant) => (
									<Badge
										variant={variant}
										key={variant}
										size={size}
										{...args}
										color={color}
									>
										{children}
									</Badge>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		)
	},
}

export const WithIcons: Story = {
	...Basic,
	args: {
		children: (
			<>
				<HiFire />
				Fire
			</>
		),
	},
}

export const IconBadges: Story = {
	...Basic,
	args: {
		icon: true,
		children: <HiFire />,
	},
}
