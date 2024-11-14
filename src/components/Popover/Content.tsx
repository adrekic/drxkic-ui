import React, { forwardRef, memo } from "react"
import {
	PopoverContent,
	PopoverContentProps as RadixPopoverContentProps,
} from "@radix-ui/react-popover"
import { popover } from "./cva"

interface PopoverContentProps extends RadixPopoverContentProps {
	color: string
}

const Content = memo(
	forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
		const { className, color, sideOffset = 5 } = props
		return (
			<PopoverContent
				className={popover(className)}
				ref={ref}
				data-accent-color={color}
				sideOffset={sideOffset}
				{...props}
			/>
		)
	}),
)

export { Content }
export type { PopoverContentProps }
