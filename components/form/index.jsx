import React, { useState } from 'react'
import Input from '../UI/input/Input'
import InputMaskNumber from '../UI/InputMaskNumber/InputMaskNumber'
import { styled } from 'styled-components'

export const Form = () => {
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')

	const handleNameChange = (value) => {
		setName(value)
	}

	const handleNumberChange = (value) => {
		setNumber(value)
	}
	return (
		<AppForm>
			<Input
				label='Name'
				value={name}
				onChange={(e) => handleNameChange(e.target.value)}
			/>
			<InputMaskNumber
				placholder='Телефон'
				label='Телефон *'
				value={number}
				onChange={(e) => handleNumberChange(e)}
			/>
		</AppForm>
	)
}

const AppForm = styled.form`
	width: 100%;
	background-color: blue;
`
