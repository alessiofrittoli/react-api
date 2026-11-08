/// <reference types='vitest/config' />

import { viteConfig } from '@alessiofrittoli/package-configs/vite'

console.log(
`
___________________________________________________________
        ____                  __      ___    ____  ____
       / __ \\___  ____ ______/ /_    /   |  / __ \\/  _/
      / /_/ / _ \\/ __ \\\`/ ___/ __/  / /| | / /_/ // /
     / _, _/  __/ /_/ / /__/ /_    / ___ |/ ____// /
    /_/ |_|\\___/\\__,_/\\___/\\__/   /_/  |_/_/   /___/
___________________________________________________________
`
)

export default viteConfig({
	test: {
		projects: [
			{
				extends: true,
				test: {
					name: 'node',
					environment: 'node',
					include: ['__tests__/node/**/*.test.ts'],
				},
			},
			{
				extends: true,
				test: {
					name: 'jsdom',
					environment: 'jsdom',
					include: ['__tests__/jsdom/**/*.test.tsx'],
					setupFiles: ['__tests__/jsdom/setup.ts'],
				},
			},
		],
	},
})
