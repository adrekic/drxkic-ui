import React, { memo, forwardRef, ComponentProps } from "react"
import { cx } from "class-variance-authority"
import { button, interactive } from "./utils"
import { ButtonVariants, InteractiveVariants } from "./typings"
import { useButtons } from "../Buttons"
import { Colors } from "../../../drxkicui.config.ts"

export interface ButtonProps
	extends ButtonVariants,
		InteractiveVariants,
		ComponentProps<"button"> {
	color: keyof typeof Colors
}

export const Button = memo(
	forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
		const buttonsContext = useButtons()
		const {
			children,
			className,
			icon = buttonsContext.icon,
			variant = buttonsContext.variant,
			size = buttonsContext.size,
			color,
			...rest
		} = props
		return (
			<button
				className={cx(
					className,
					button({ size, icon }),
					interactive({ variant }),
				)}
				ref={ref}
				data-accent-color={color}
				{...rest}
			>
				{children}
			</button>
		)
	}),
)
