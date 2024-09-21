import { VariantProps } from "class-variance-authority"
import { button, interactive } from "./utils"

export type InteractiveVariants = VariantProps<typeof interactive>
export type ButtonVariants = VariantProps<typeof button>
