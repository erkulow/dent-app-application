import Head from 'next/head'
import { Form } from '../components/form'
import MainLayout from '../layouts/main-layout'
import { styled } from 'styled-components'
import Image from 'next/image'
import RecepIMG from '../public/assets/recep.svg'
import Circle1 from '../public/assets/circle1.svg'
import Circle2 from '../public/assets/circle2.svg'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
	const headContext = {
		title: 'Dev-Aksoft',
		meta: [
			{
				name: 'description',
				content:
					'Rick and Morty app created with nextjs graphql, apollo client and styled components',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
		link: [
			{
				rel: 'icon',
				href: '/favicon.ico',
			},
		],
	}

	const [openForm, setopenForm] = useState(false)

	return (
		<MainLayout headContext={headContext}>
			<BackgroundWrapper>
				<TopRadius />
				<WrapperIMG>
					<Image src={RecepIMG} alt='Logo' />
				</WrapperIMG>
				<WrapperCircle1>
					<Image src={Circle1} alt='Logo' />
				</WrapperCircle1>
				<Titles>
					<Title>Beybars Dent-App</Title>
					<DentAppName>Dent-App</DentAppName>
				</Titles>
				<Description>
					В этом очерке я постараюсь не только рассказать о различных
					единицах измерения, но и построить общую картину – что и
					когда выбирать.
				</Description>
				<WrapperForm openForm={openForm}>
					{openForm ? (
						<Form setopenForm={setopenForm} />
					) : (
						<OpenButton onClick={() => setopenForm(!openForm)}>
							Заполнить форму
						</OpenButton>
					)}
				</WrapperForm>
				<WrapperCircle2>
					<Image src={Circle2} alt='Logo' />
				</WrapperCircle2>
			</BackgroundWrapper>
		</MainLayout>
	)
}

const BackgroundWrapper = styled.div`
	width: 100%;
	max-width: 1440px;
	height: 100vh;
	max-height: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

const WrapperForm = styled.main`
	position: absolute;
	bottom: -2px;
	width: 100%;
	z-index: 50;
	height: ${({ openForm }) => (openForm ? '85vh' : '50px')};
	background-color: #ffffff;
	border-top-left-radius: ${({ openForm }) => (openForm ? '30px' : '30px')};
	border-top-right-radius: ${({ openForm }) => (openForm ? '30px' : '30px')};
	display: flex;
	align-items: flex-start;
	transition: 1.5s ease;
`
const TopRadius = styled.div`
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 20px;
	background-color: #5790ff;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
`

const WrapperIMG = styled.div`
	margin-top: 60px;
	img {
		width: 100%;
		height: 100%;
		max-width: 360px;
		max-height: 360px;
	}
`
const WrapperCircle1 = styled.div`
	position: fixed;
	top: -110px;
	left: -140px;
	z-index: 1;
	-webkit-animation: rotating 8s linear infinite;
	-moz-animation: rotating 8s linear infinite;
	-ms-animation: rotating 8s linear infinite;
	-o-animation: rotating 8s linear infinite;
	animation: rotating 8s linear infinite;
	@keyframes rotating {
		from {
			-ms-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes {
		from {
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`

const WrapperCircle2 = styled.div`
	position: fixed;
	top: 50%;
	/* left: 70%; */
	right: -150px;
	z-index: 1;
	-webkit-animation: rotating 8s linear infinite;
	-moz-animation: rotating 8s linear infinite;
	-ms-animation: rotating 8s linear infinite;
	-o-animation: rotating 8s linear infinite;
	animation: rotating 8s linear infinite;
	@keyframes rotating {
		from {
			-ms-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes {
		from {
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`

const Titles = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.5em;
	margin-top: 10px;
	position: relative;
	z-index: 50;
`
const Title = styled.h2`
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 1.3em;
	line-height: 40px;
	color: #5790ff;
	position: relative;
	z-index: 50;
`
const DentAppName = styled.p`
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 0.8em;
	color: #000000;
	position: relative;
	z-index: 50;
`
const Description = styled.p`
	padding: 0 15px;
	text-align: center;
	font-family: 'Source Sans Pro', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	color: #000000;
	margin-bottom: 100px;
	margin-top: 10px;
	position: relative;
	z-index: 50;
`
const OpenButton = styled.button`
	background-color: #5790ff;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	height: 100%;
	width: 100%;
	border: none;
	font-family: 'Source Sans Pro', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	color: #ffffff;
	@keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			opacity: 1;
		}
	}
	opacity: 1;
	animation: flickerAnimation 1.5s infinite;
`
