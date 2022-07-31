import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default (props: any) => {
	const { children, onClick } = props

	return <Main onClick={onClick}>{children}</Main>
}

//=> Style
const Main = styled.button`
	padding: 8px 10px;
	font-size: 14px;
	color: #282c34;
	font-weight: bold;
	line-height: 1;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(26, 26, 26, 45%);
	cursor: pointer;
	&:hover {
		transform: scale(0.96);
		background: #ededed;
	}
`
