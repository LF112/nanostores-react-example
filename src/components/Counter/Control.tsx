import React from 'react'
import styled from 'styled-components'
//[ package ]

import Button from 'components/reusable/Button'
//[ component ]

import { increment, decrement } from 'state/couter'
//[ state ]

//=> DOM
export default () => {
	return (
		<Control>
			<Button onClick={() => increment()}>+</Button>
			<Button onClick={() => decrement()}>-</Button>
		</Control>
	)
}

//=> Style
const Control = styled.div`
	position: absolute;
	width: 100%;
	bottom: 10px;
	left: 0;
	padding: 0 10px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	> button + button {
		margin-left: 10px;
	}
`
