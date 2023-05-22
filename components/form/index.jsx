import React, { useState } from 'react'
import { styled } from 'styled-components'
import Input from '../UI/input/Input'
import InputMaskNumber from '../UI/InputMaskNumber/InputMaskNumber'
import DownArrow from '../../public/assets/down.svg'
import Image from 'next/image'
import Button from '../UI/button'

export const Form = ({ setopenForm }) => {
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')
	const [doctor, setDoctor] = useState('')
	const [cheduleTime, setCheduleTime] = useState('')

	const handleNameChange = (value) => {
		setName(value)
	}

	const handleNumberChange = (value) => {
		setNumber(value)
	}
	const setCheduleTimeHandler = (value) => {
		setCheduleTime(value)
	}

	const sendFormHandler = () => {
		console.log({
			name: name,
			number: number,
			doctor: doctor,
			cheduleTime: cheduleTime,
		})
	}

	const closeFormHandler = () => {
		setopenForm(false)
		setName('')
		setNumber('')
		setDoctor('')
		setCheduleTime('')
	}

	const doctors = [
		{ path: '1', label: 'Абу Мелисов' },
		{ path: '2', label: 'Бейбарс Эркулов' },
		{ path: '3', label: 'Нурс Исков' },
		{ path: '4', label: 'Рахим Миллион' },
		{ path: '5', label: 'Тимур Капалов' },
	]

	const dataTime = [
		{
			startTime: '09:00',
			endTime: '17:00',
		},
		{
			startTime: '09:00',
			endTime: '17:00',
		},
		{
			startTime: '09:00',
			endTime: '17:00',
		},
		{
			startTime: '09:00',
			endTime: '17:00',
		},
		{
			startTime: '09:00',
			endTime: '17:00',
		},
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
				{cheduleTime.length === 0 ? (
					doctor !== '' ? (
						doctor === '-' ? (
							<StyledErrorMessage>
								Выберите Доктора
							</StyledErrorMessage>
						) : (
							<StyledErrorMessage>
								У врача нет доступного времени в этот день
							</StyledErrorMessage>
						)
					) : (
						<StyledErrorMessage>
							Выберите Доктора
						</StyledErrorMessage>
					)
				) : (
					<StyledSchedule>
						{dataTime?.map((item) => (
							<Shulde
								key={item.startTime}
								style={{
									backgroundColor:
										dataTime === item.startTime &&
										'#06b5d4',
									color:
										dataTime === item.startTime && 'white',
								}}
								onClick={(e) =>
									setCheduleTimeHandler(e.target.textContent)
								}
							>
								<>{item.startTime}</>
								<> - </>
								<>{item.endTime}</>
							</Shulde>
						))}
					</StyledSchedule>
				)}
				<Button onClick={() => sendFormHandler()}>Записаться</Button>
			</WrapperForm>
			<WrapperArrow onClick={() => closeFormHandler(false)}>
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
const StyledSchedule = styled.div`
	margin-top: 10px;
	height: 100%;
	width: 100%;
	max-width: 600px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 8px;
`
const Shulde = styled.div`
	width: 90px;
	height: 30px;
	border: none;
	font-family: 'Source Sans Pro';
	font-size: 13px;
	background-color: #d8f0fc;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 6px;
	cursor: pointer;
	&:active {
		background-color: #06b5d4 !important;
		color: #ffffff;
	}
`
const StyledErrorMessage = styled.div`
	font-family: 'Source Sans Pro';
	width: 100%;
	height: 50px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	line-height: 24px;
	background-color: #fff3cd;
`
