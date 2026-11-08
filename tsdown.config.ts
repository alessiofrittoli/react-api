import { tsdownConfig } from '@alessiofrittoli/package-configs/tsdown'
import { resolve } from 'path'

export default tsdownConfig(() => ({
	entry: ['src/**/index.(ts|tsx)'],
	tsconfig: resolve(process.cwd(), 'tsconfig.build.json'),
}))
