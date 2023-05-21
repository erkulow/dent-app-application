import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = forwardRef((props, ref) => {
	return (
		<WrapperInput>
			<StyledLable htmlFor={props.label}>{props.label}</StyledLable>
			<InputStyled
				type={props.type || 'text'}
				onChange={props.onChange}
				value={props.value == null || '' ? '' : props.value}
				placeholder={props.placeholder}
				autoComplete='off'
				disabled={props.disabled}
				notDisabled={props.notDisabled}
				active={props.active}
				ref={ref}
				{...props}
			/>
		</WrapperInput>
	)
})

const WrapperInput = styled.div`
	width: 100% !important;
	display: flex;
	flex-direction: column;
	gap: 2px;
`

const StyledLable = styled.label`
	font-family: 'PT Sans', sans-serif;
	font-size: 14px;
	font-weight: 400;
	color: #ffffff;
`

const InputStyled = styled.input`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '42px'};
	padding: ${({ padding }) => padding || '10px'};
	border-radius: ${({ borderRadius }) => borderRadius || '5px'};
	letter-spacing: 0.6px;
	color: black;
	font-weight: bold;
	font-size: 16px;
	font-weight: 400;
	outline: none;
	transition: 0.2s;
	background-color: ${({ background }) => background || '#ffffff'};
	border: ${({ border }) => border || '1px solid #5790ff'};
	::placeholder {
		color: #d0d2d3;
	}
	:active {
		border: ${({ active }) =>
			active ? '1px solid #5790ff !important' : ''};
	}
	:focus {
		-webkit-box-shadow: 0px 0px 1px 1px #5790ff;
		-moz-box-shadow: 0px 0px 1px 1px #5790ff;
		box-shadow: 0px 0px 1px 1px #5790ff;
	}
	:disabled,
	:disabled:hover {
		opacity: ${({ notDisabled }) => (notDisabled ? '1' : '0.5')};
		cursor: not-allowed;
	}
	-webkit-appearance: none;
	&[type='number']::-webkit-outer-spin-button,
	&[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`
export default Input
