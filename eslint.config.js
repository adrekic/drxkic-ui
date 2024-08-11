import globals from "globals"
import pluginJs from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	...tseslint.configs.recommended,
	pluginJs.configs.recommended,
	eslintConfigPrettier,
	...new FlatCompat().config({
		extends: [
			"plugin:storybook/recommended",
			// other extends
		],
		// .eslintignore is not supported with flat config, make sure to ignore also other build and test folders
		ignorePatterns: [".storybook", "storybook-static"],
	}),
]
