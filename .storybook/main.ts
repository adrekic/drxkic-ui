import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
	// required
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	framework: {
		name: "@storybook/react-vite",
		options: {
			// TODO: look into why this would be important or not
			strictMode: true,
		},
	},
	// optional
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	docs: {
		autodocs: "tag",
	},
}
export default config
