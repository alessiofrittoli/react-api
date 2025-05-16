import React from 'react'
import { childrenFn, isComponentType, isReactNode } from '@/utils'


describe( 'isComponentType', () => {

	it( 'returns true for a functional component', () => {

		const FunctionalComponent: React.FC = () => <div />

		expect( isComponentType( FunctionalComponent ) ).toBe( true )

	} )


	it( 'returns true for a class component', () => {

		// eslint-disable-next-line react-server-components/use-client
		class ClassComponent extends React.Component
		{
			render()
			{
				return <div />
			}
		}

		expect( isComponentType( ClassComponent ) ).toBe( true )

	} )


	it( 'returns false for non-component inputs', () => {

		expect( isComponentType( '123' ) ).toBe( false )
		expect( isComponentType( 123 ) ).toBe( false )
		expect( isComponentType( {} ) ).toBe( false )
		expect( isComponentType( null ) ).toBe( false )
		expect( isComponentType( undefined ) ).toBe( false )

	} )

} )

describe( 'isReactNode', () => {
	
	it( 'returns true for a string', () => {
		expect( isReactNode( 'Hello' ) ).toBe( true )
	} )


	it( 'returns true for a number', () => {
		expect( isReactNode( 123 ) ).toBe( true )
	} )


	it( 'returns true for a boolean', () => {
		expect( isReactNode( true ) ).toBe( true )
		expect( isReactNode( false ) ).toBe( true )
	} )


	it( 'returns true for null or undefined', () => {
		expect( isReactNode( null ) ).toBe( true )
		expect( isReactNode( undefined ) ).toBe( true )
	} )


	it( 'returns true for a valid React element', () => {
		const element = <div />
		expect( isReactNode( element ) ).toBe( true )
	} )


	it( 'returns true for an array of React nodes', () => {
		const nodes = [ 'Hello', 123, <div key='key' />, null ]
		expect( isReactNode( nodes ) ).toBe( true )
	} )
	
	
	it( 'returns true for a rendered React Component', () => {
		const Component: React.FC = () => <div />
		expect( isReactNode( <Component /> ) ).toBe( true )
	} )


	it( 'returns false for non-React node inputs', () => {
		const Component: React.FC = () => <div />
		
		expect( isReactNode( Component ) ).toBe( false )
		expect( isReactNode( {} ) ).toBe( false )
		expect( isReactNode( () => {} ) ).toBe( false )
		expect( isReactNode( Symbol( 'test' ) ) ).toBe( false )
	} )
} )


describe('childrenFn', () => {

	it( 'returns the children if it is a ReactNode (string)', () => {
		expect( childrenFn( 'hello' ) ).toBe( 'hello' )
	} )


	it( 'returns the children if it is a ReactNode (number)', () => {
		expect( childrenFn( 42 ) ).toBe( 42 )
	} )


	it( 'returns the children if it is a ReactNode (React element)', () => {
		
		const element = <div>Test</div>
		expect( childrenFn( element ) ).toBe( element )

	} )


	it( 'calls the function if children is a function (no args)', () => {

		const fn = jest.fn( () => <span>Called</span> )
		const result = childrenFn( fn )
		expect( fn ).toHaveBeenCalled()
		expect( React.isValidElement( result ) ).toBe( true )

	} )


	it( 'calls the function with arguments if children is a function', () => {

		const fn = jest.fn( ( a: number, b: string ) => <div>{a}-{b}</div> )
		const result = childrenFn( fn, 1, 'foo' )
		
		expect( fn ).toHaveBeenCalledWith( 1, 'foo' )
		expect( React.isValidElement( result ) ).toBe( true )

	} )


	it( 'returns undefined if children is undefined', () => {
		expect( childrenFn( undefined ) ).toBeUndefined()
	} )


	it( 'returns null if children is null', () => {
		expect( childrenFn( null ) ).toBeNull()
	} )

} )