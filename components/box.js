import React, { useState } from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'

const Space = styled('div')`
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 0 auto;
	padding: 0 30px;
	height: 64px;
	max-width: 1024px;
`

export default function Newbox(props) {
	const hex = props.hexcolor

	const useStyles = makeStyles(() => ({
		color: {
			backgroundColor: hex,
		},
	}))
	const classes = useStyles()
	return (
		<div>
			<h1>{props.data}</h1>
			<h1>COLOR VALUE: {hex}</h1>
			<Space>
				<Box
					sx={{
						width: 200,
						height: 60,
						borderRadius: '12px',
					}}
					className={classes.color}
				></Box>
			</Space>
		</div>
	)
}
