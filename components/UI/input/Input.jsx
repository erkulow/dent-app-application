import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = forwardRef((props, ref) => {
	if (props.type === 'select') {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '3px',
				}}
			>
				<StyledLable htmlFor={props.label}>{props.label}</StyledLable>
				<InputStyledSelect ref={ref} {...props}>
					<option defaultValue>-</option>
					{props?.options?.map((option) => (
						<option
							key={option.path}
							value={option.path == null ? '' : option.path}
							style={{ color: 'black', background: 'white' }}
						>
							{option.label}
						</option>
					))}
				</InputStyledSelect>
			</div>
		)
	}
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
	gap: 3px;
`

const StyledLable = styled.label`
	font-family: 'Source Sans Pro';
	font-size: 14px;
	font-weight: 400;
	color: #5460e6;
`

const InputStyled = styled.input`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '42px'};
	padding: ${({ padding }) => padding || '10px'};
	border-radius: ${({ borderRadius }) => borderRadius || '5px'};
	letter-spacing: 0.6px;
	color: #5460e6;
	font-weight: bold;
	font-size: 16px;
	font-weight: 400;
	outline: none;
	font-family: 'Source Sans Pro';
	transition: 0.2s;
	background-color: ${({ background }) => background || '#ffffff'};
	border: ${({ border }) => border || '1px solid #5460e6'};
	::placeholder {
		color: #d0d2d3;
	}
	:active {
		border: ${({ active }) =>
			active ? '1px solid #5460e6 !important' : ''};
	}
	/* :focus {
		-webkit-box-shadow: 0px 0px 1px 1px #5460e6;
		-moz-box-shadow: 0px 0px 1px 1px #5460e6;
		box-shadow: 0px 0px 1px 1px #5460e6;
	} */
	&[type='date']::-webkit-calendar-picker-indicator {
		filter: invert(50%) sepia(74%) saturate(6290%) hue-rotate(226deg)
			brightness(95%) contrast(89%);
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
const InputStyledSelect = styled.select`
	width: ${({ width }) => width || '100%'};
	padding: 0.7em 0.8em;
	border-radius: 7px;
	letter-spacing: 0.6px;
	color: #5460e6;
	font-weight: bold;
	font-family: 'Source Sans Pro';
	font-size: 16px;
	font-weight: 400;
	outline: none;
	transition: 0.2s;
	background-color: #ffffff;
	border: 1px solid #5460e6;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	::placeholder {
		color: #d0d2d3;
	}
	:active {
		border: 1px solid #5460e6;
	}
	:focus {
		border: 1px solid #5460e6;
	}
	:disabled,
	:disabled:hover {
		opacity: 0.5;
		cursor: not-allowed;
	}
`
export default Input
