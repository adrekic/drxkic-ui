import React, { memo, PropsWithChildren, useMemo } from "react"
import { ButtonsContext } from "./context"
import { ButtonVariants, InteractiveVariants } from "../Button/typings"

interface ButtonsProps
	extends PropsWithChildren,
		Omit<InteractiveVariants, "selected">,
		ButtonVariants {}

export const Buttons = memo((props: ButtonsProps) => {
	const { children, variant, size, icon } = props

	const value = useMemo(
		() => ({
			variant,
			size,
			icon,
		}),
		[icon, size, variant],
	)

	return (
		<ButtonsContext.Provider value={value}>
			{children}
		</ButtonsContext.Provider>
	)
})
Buttons.displayName = "Buttons"
