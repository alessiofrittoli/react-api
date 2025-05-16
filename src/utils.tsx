import { isValidElement } from 'react'
import { Fragment } from 'react/jsx-runtime'


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


/**
 * Represent a `React.ReactNode` or a callable function that returns a `React.ReactNode`.
 * 
 * @template T An Array defining optional arguments passed to the `children` function.
 */
export type FunctionChildren<T extends unknown[]> = (
	| React.ReactNode
	| ( ( ...args: T ) => React.ReactNode )
	| FunctionChildren<T>[]
)


/**
 * Represent a `React.ReactNode` or a callable function that returns a `React.ReactNode`.
 * 
 * @template T An Array defining optional arguments passed to the `children` function.
 */
export type RenderedFunctionChildren<T extends FunctionChildren<U>, U extends unknown[]> = (
	T extends FunctionChildren<U>[] ? React.ReactNode[] : React.ReactNode
)


/**
 * Render `children` which could be possible a callable function.
 * 
 * @template T The `children` type which extends the `FunctionChildren<U>` interface.
 * @template U An Array defining optional arguments passed to the `children` function.
 * 
 * @param	children The `children` to render.
 * @param	args (Optional) Arguments passed to `children` if is a function.
 * 
 * @returns The rendered `children`. If `children` is a function, the result of that function is returned.
 */
export const childrenFn = <T extends FunctionChildren<U>, U extends unknown[]>( children: T, ...args: U ): RenderedFunctionChildren<T, U> => {
	
	if ( Array.isArray( children ) ) {
		return children.map( ( children, index ) => (
			<Fragment key={ index }>{ childrenFn( children, ...args ) }</Fragment>
		) )
	}

	if ( typeof children === 'function' ) {
		return children( ...args ) as RenderedFunctionChildren<T, U>
	}

	return children as RenderedFunctionChildren<T, U>

}