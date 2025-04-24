import { GeneratorComponent } from './GeneratorComponent'

export * from './GeneratorComponent'

/**
 * Transform your generator function to a React.js Component.
 * 
 * @param fn The async generator function.
 * @usage
 * 
 * ```tsx
 * interface StepProps
 * {
 * 	something: string
 * }
 * 
 * export const Steps = WithGenerator<StepProps>(
 * 	async function* ( props ) {
 * 		let i = 0
 * 		yield <h1>Step { ++i }</h1>
 * 		await new Promise( resolve => setTimeout( resolve, 2000 ) )
 * 		yield <h1>Step { ++i }</h1>
 * 		...
 * 		await new Promise( resolve => setTimeout( resolve, 2000 ) )
 * 		return <h1>Step { ++i }</h1>
 * 	}
 * )
 * ```
 */
export const WithGenerator = <
	T = unknown
>(
	fn: ( props: T ) => AsyncGenerator<React.ReactNode, React.ReactNode, React.ReactNode>
): React.FC<T> => {

	const WithGeneratorComponent = (
		( props: T ) => (
			<GeneratorComponent generator={ fn( props ) } />
		)
	)

	return WithGeneratorComponent
	
}