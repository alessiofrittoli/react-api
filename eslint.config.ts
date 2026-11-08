import { reactProfile } from '@alessiofrittoli/package-configs/eslint/profiles/react'
import { eslintConfig } from '@alessiofrittoli/package-configs/eslint'
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

export default eslintConfig(
	...reactProfile,
	...fixupConfigRules(compat.extends('plugin:react-server-components/recommended')),
	{
		rules: {
			// FIXME: TypeError: Error while loading rule 'react/no-direct-mutation-state': contextOrFilename.getFilename is not a function
			'react/no-direct-mutation-state': 'off',
			// FIXME: TypeError: Error while loading rule 'react/no-render-return-value': contextOrFilename.getFilename is not a function
			'react/no-render-return-value': 'off',
			// FIXME: TypeError: Error while loading rule 'react/no-string-refs': contextOrFilename.getFilename is not a function
			'react/no-string-refs': 'off',
		},
	},
)
