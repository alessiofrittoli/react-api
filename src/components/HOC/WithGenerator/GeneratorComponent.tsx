import { Suspense } from 'react'


interface GeneratorComponentProps
{
	generator: AsyncGenerator<React.ReactNode, React.ReactNode, React.ReactNode>
}

/**
 * @deprecated This Component is now part of [`@alessiofrittoli/react-components`](https://npmjs.com/package/@alessiofrittoli/react-components) and it will be removed since v1.0.0 release.
 */
export const GeneratorComponent: React.FC<GeneratorComponentProps> = (
	async ( { generator } ) => {

		const result = await generator.next()

		if ( result.done ) return result.value

		return (
			<Suspense fallback={ result.value }>
				<GeneratorComponent generator={ generator } />
			</Suspense>
		)
		
	}
)