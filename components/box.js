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
const Gap = styled('div')`
	margin-top: 0px;
	padding: 0 30px;
	padding-top: 1px;
`

export default function Newbox(props) {
	const hex = props.hexcolor
	// console.log("box:", hex, name)

	const useStyles = makeStyles(() => ({
		color: {
			backgroundColor: hex,
		},
	}))
	const classes = useStyles()
	return (
		<div>
			<h1>{props.data}</h1>
			<Space>
				<Box
					sx={
						({
							width: 150,
							height: 70,
							borderRadius: '12px',
							border: '2px solid black'
						},
						)
					}
					className={classes.color}
				>
					<Gap>
						{' '}
						<h5>{hex}</h5>
						{/* <h5>{name}</h5> */}
					</Gap>
				</Box>
			</Space>
		</div>
	)
}
