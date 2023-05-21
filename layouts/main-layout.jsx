import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const MainLayout = ({ headContext, children }) => {
	const { title, meta, link } = headContext
	return (
		<Container>
			<Head>
				<title>{title}</title>
				{meta.map(({ property, content, key, name }) => (
					<meta
						name={name || ''}
						content={content || ''}
						property={property || ''}
						key={key || ''}
					/>
				))}
				{link.map(({ rel, href }) => (
					<link rel={rel || ''} href={href || ''} />
				))}
			</Head>
			{children}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f6ebe5;
`

export default MainLayout
