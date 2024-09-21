import { useContext } from "react"
import { ButtonsContext } from "./context"

export const useButtons = () => useContext(ButtonsContext)
