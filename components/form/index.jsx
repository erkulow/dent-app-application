import React, { useState } from 'react'
import { styled } from 'styled-components'
import Input from '../UI/input/Input'
import InputMaskNumber from '../UI/InputMaskNumber/InputMaskNumber'
import DownArrow from '../../public/assets/down.svg'
import Image from 'next/image'
import Button from '../UI/button'

export const Form = ({ setopeForm }) => {
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')
	const [doctor, setDoctor] = useState('')

	const handleNameChange = (value) => {
		setName(value)
	}

	const handleNumberChange = (value) => {
		setNumber(value)
	}

	const doctors = [
		{ path: 'NOT_CONFIRMED', label: 'Не подтверждена' },
		{ path: 'CONFIRMED', label: 'Подтвержден' },
		{ path: 'COMEIN', label: 'Пришел' },
		{ path: 'NOT_COME', label: 'Не пришел' },
		{ path: 'CANCELED', label: 'Отменен' },
	]
	return (
		<AppForm>
			<h1>Заплоните форму</h1>
			<WrapperForm>
				<Input
					label='Имя *'
					value={name}
					onChange={(e) => handleNameChange(e.target.value)}
				/>
				<InputMaskNumber
					placholder='Телефон'
					label='Телефон *'
					value={number}
					onChange={(e) => handleNumberChange(e)}
				/>
				<Input
					label='Доктор'
					type='select'
					options={doctors}
					value={doctor}
					onChange={(e) => setDoctor(e.target.value)}
				/>
				<Button>Записаться</Button>
			</WrapperForm>
			<WrapperArrow onClick={() => setopeForm(false)}>
				<Image src={DownArrow} alt='Down' />
			</WrapperArrow>
		</AppForm>
	)
}

const AppForm = styled.form`
	width: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 600;
		line-height: 40px;
		color: #5790ff;
		text-align: center;
		margin-bottom: 10px;
	}
`
const WrapperForm = styled.div`
	width: 100%;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	gap: 15px;
`
const WrapperArrow = styled.div`
	width: 100px;
	border-radius: 30px;
	border: 1px solid #5790ff;
	padding: 5px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
	position: absolute;
	bottom: 25px;
	right: 50%;
	left: 50%;
	transform: translate(-50%, 50%);
`
