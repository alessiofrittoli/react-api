import { Suspense } from 'react'


interface GeneratorComponentProps
{
	generator: AsyncGenerator<React.ReactNode, React.ReactNode, React.ReactNode>
}


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