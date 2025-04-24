import { isValidElement } from 'react'

/**
 * Check if the given `input` is a React ComponentType.
 * 
 * @template P The props the component accepts.
 * 
 * @param input The input to check.
 * @returns `true` if the given input is a React ComponentType, `false` otherwise.
 */
export const isComponentType = <
	P = unknown
>( input: unknown ): input is React.ComponentType<P> => (
	typeof input === 'function'
)


/**
 * Check if the given `input` is a React Node.
 * 
 * @param input The input to check.
 * @returns `true` if the given input is a React Node, `false` otherwise.
 */
export const isReactNode = ( input: unknown ): input is React.ReactNode => (
	typeof input === 'string'
	|| typeof input === 'number'
	|| typeof input === 'boolean'
	|| input === null
	|| input === undefined
	|| isValidElement( input )
	|| ( Array.isArray( input ) && input.every( isReactNode ) )
)