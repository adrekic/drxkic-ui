import React, { ComponentProps, forwardRef, memo } from "react"
import { cx } from "class-variance-authority"
import { badge } from "./utils"
import { BadgeVariants } from "./typings"
import { Colors } from "../../../drxkicui.config.ts"

export interface BadgeProps extends ComponentProps<"span">, BadgeVariants {
	color: keyof typeof Colors
}

export const Badge = memo(
	forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
		const { children, className, color, variant, size, icon, ...rest } =
			props

		return (
			<span
				data-accent-color={color}
				ref={ref}
				className={cx(className, badge({ variant, size, icon }))}
				{...rest}
			>
				{children}
			</span>
		)
	}),
)
