import { isValidElement } from 'react'

/**
 * Check if the given `input` is a React ComponentType.
 * 
 * @param input The input to check.
 * @returns `true` if the given input is a React ComponentType, `false` otherwise.
 */
export const isComponentType = <
	T = unknown
>( input: unknown ): input is React.ComponentType<T> => (
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