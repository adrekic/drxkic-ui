import type { Preview } from "@storybook/react"
import { withThemeByDataAttribute } from "@storybook/addon-themes"
import "../src/index.css"

// global CSS imports go here

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	decorators: [
		withThemeByDataAttribute({
			themes: {
				// nameOfTheme: 'dataAttributeForTheme',
				light: "",
				dark: "dark",
			},
			defaultTheme: "light",
			attributeName: "data-mode",
		}),
	],
}

export default preview
