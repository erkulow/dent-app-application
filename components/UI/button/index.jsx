import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}
const StyledButton = styled.button`
	width: ${({ width }) => width || '100%'};
	height: 42px;
	background-color: ${({ backgroundColor }) => backgroundColor || '#5790ff'};
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	padding: ${({ padding }) => padding || '8px 18px'};
	border: ${({ border }) => border || 'none'};
	margin: ${({ margin }) => margin || ''};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
	font-family: 'Source Sans Pro';
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 40px;
	color: white;
	outline: none;
	:hover {
		opacity: 0.9;
	}
	:active {
		color: white;
		background-color: ${({ backgroundColorActive }) =>
			backgroundColorActive || '#434fce'};
	}
	:disabled {
		cursor: not-allowed;
		color: #7e7e7e;
		border: #7e7e7e;
		background: ${({ disabledColor }) => disabledColor || '#1c1b1f1f'};
	}
`
export default Button
