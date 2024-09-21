import { createContext } from "react"
import { ButtonVariants, InteractiveVariants } from "../Button/typings"

interface IButtonsContext
	extends Omit<InteractiveVariants, "selected">,
		ButtonVariants {}

export const ButtonsContext = createContext<IButtonsContext>(
	{} as IButtonsContext,
)
