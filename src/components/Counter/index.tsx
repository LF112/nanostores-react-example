import React from 'react'
import styled from 'styled-components'
import { useStore } from '@nanostores/react'
//[ package ]

import { DefaultCard } from 'components/reusable/Card'
import Control from './Control'
//[ component ]

import { count } from 'state/couter'
//[ state ]

//=> DOM
export default () => {
	const CountNumber = useStore(count)

	return (
		<DefaultCard>
			<Title>Coutner</Title>
			<Coutn>{CountNumber}</Coutn>
			<Control />
		</DefaultCard>
	)
}

//=> Style
const Title = styled.h1`
	color: #282c34;
	font-size: 20px;
	font-family: 'Geometos';
	font-weight: bold;
	line-height: 1;
`

const Coutn = styled.h2`
	font-size: 52px;
	line-height: 1;
	font-family: 'Russo One';
	color: #21252b;
	letter-spacing: 3px;
	margin: 5px 0;
`
