import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import styled from 'styled-components'

const InputMaskNumber = (props) => {
	const country = ['kg', 'ru', 'kz']

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '3px',
			}}
		>
			<StyledLable htmlFor={props.label}>{props.label}</StyledLable>
			<InputStyled
				country={'kg'}
				onlyCountries={country}
				value={props.value}
				onChange={props.onChange}
				inputStyle={{
					border: 'none',
					width: '100%',
					height: '30px',
				}}
				defaultMask={'kg'}
				buttonStyle={{
					backgroundColor: 'white',
					border: 'none',
				}}
			/>
		</div>
	)
}
const StyledLable = styled.label`
	font-family: 'Source Sans Pro';
	font-size: 14px;
	font-weight: 400;
	color: #5790ff;
`
const InputStyled = styled(PhoneInput)`
	width: 100%;
	height: ${({ height }) => height || ''};
	max-width: ${({ maxWidth }) => maxWidth || '100%'};
	min-width: ${({ minWidth }) => minWidth || '100%'};
	padding: ${({ padding }) => padding || '5px'};
	border-radius: ${({ borderRadius }) => borderRadius || '5px'};
	letter-spacing: 0.6px;
	color: grey;
	font-weight: bold;
	font-size: 16px;
	font-weight: 400;
	outline: none;
	transition: 0.2s;
	background-color: ${({ background }) => background || '#ffffff'};
	border: ${({ validation }) =>
		validation ? '1px solid red' : '1px solid #5790ff'};
	::placeholder {
		color: #d0d2d3;
	}
	:active {
		border: 1px solid #5790ff;
	}
	:focus {
		border: 1px solid #5790ff;
	}
	:disabled,
	:disabled:hover {
		opacity: 0.5;
		cursor: not-allowed;
	}
	-webkit-appearance: none;
	.dropdownClass {
		background-color: red;
	}
`

export default InputMaskNumber
