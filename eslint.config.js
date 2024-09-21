import globals from "globals"
import pluginJs from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import { fixupPluginRules, fixupConfigRules } from "@eslint/compat"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"

const flatCompat = new FlatCompat()

export default [
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	...tseslint.configs.recommended,
	pluginJs.configs.recommended,
	eslintConfigPrettier,
	{
		plugins: {
			react: fixupPluginRules(reactPlugin),
			"react-hooks": fixupPluginRules(reactHooksPlugin),
		},
		rules: {
			...reactHooksPlugin.configs.recommended.rules,
		},
	},
	...fixupConfigRules(
		flatCompat.config({
			extends: ["plugin:storybook/recommended"],
			// .eslintignore is not supported with flat config, make sure to ignore also other build and test folders
			ignorePatterns: [".storybook", "storybook-static"],
		}),
	),
]
