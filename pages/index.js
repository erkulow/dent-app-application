import Head from 'next/head'
import { Form } from '../components/form'
import MainLayout from '../layouts/main-layout'
import { styled } from 'styled-components'
import Image from 'next/image'
import RecepIMG from '../public/assets/recep.svg'
import Circle1 from '../public/assets/Circle1.svg'
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

	const [openForm, setopeForm] = useState(false)

	console.log(openForm)

	return (
		<MainLayout headContext={headContext}>
			<BackgroundWrapper>
				<TopRadius />
				<WrapperIMG>
					<Image src={RecepIMG} alt='Logo' />
				</WrapperIMG>
				{/* <WrapperCircle1>
					<Image src={Circle1} alt='Logo' />
				</WrapperCircle1> */}
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
						<Form setopeForm={setopeForm} />
					) : (
						<OpenButton onClick={() => setopeForm(!openForm)}>
							Заполнить форму
						</OpenButton>
					)}
				</WrapperForm>
				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 1.1 }}
					drag='x'
					dragConstraints={{ left: -100, right: 100 }}
				/>
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
	position: relative;
`

const WrapperForm = styled.main`
	position: fixed;
	bottom: -2px;
	width: 100%;
	height: ${({ openForm }) => (openForm ? '85vh' : '50px')};
	/* background-color: #5790ff; */
	background-color: #ffffff;

	border-top-left-radius: ${({ openForm }) => (openForm ? '30px' : '30px')};
	border-top-right-radius: ${({ openForm }) => (openForm ? '30px' : '30px')};
	display: flex;
	align-items: flex-start;
	transition: 1.5s ease;
`
const TopRadius = styled.div`
	position: absolute;
	width: 100%;
	height: 40px;
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
	position: absolute;
	left: -250px;
	transform: rotate(50deg) scale(1.2);
`
const Titles = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.5em;
	margin-top: 10px;
`
const Title = styled.h2`
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 1.3em;
	line-height: 40px;
	color: #5790ff;
`
const DentAppName = styled.p`
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 0.8em;
	color: #000000;
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
