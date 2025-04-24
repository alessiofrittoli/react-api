import { defineConfig } from 'tsup'

export default defineConfig( {
	entry		: [ 'src/**/*.(ts|tsx)' ],
	format		: [ 'cjs', 'esm' ],
	dts			: true,
	splitting	: false,
	shims		: true,
	skipNodeModulesBundle: true,
	clean		: true,
	treeshake	: true,
	minify		: true,
	sourcemap	: true,
} )