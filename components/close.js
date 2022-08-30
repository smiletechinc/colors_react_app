import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Newbox from './box'
import CloseIcon from '@mui/icons-material/Close'

const Space = styled('div')`
	margin-top: 10px;
	padding: 0 260px;
`

export default function Close(props) {
	const addcolor = () => {
		{
			props.changeState()
		}
	}

	return (
		<>
			<Space>
				<CloseIcon onClick={addcolor} />
			</Space>
		</>
	)
}
