import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Fab from '@mui/material/Fab'
import { makeStyles } from '@material-ui/core/styles'
import { pink } from '@mui/material/colors'
import { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import OutlinedCard from './card'
import { ImageList } from '@mui/material'
import Newbox from './box'
import styled from '@emotion/styled'
import Welcomepage from './welcome'

const Space = styled('div')`
	margin-top: 20px;
	padding: 0 90px;
`
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

const useStyles = makeStyles((theme) => ({
	todoItem: {
		display: 'flex',
		padding: theme.spacing(1),
		opacity: 0,
		animationName: '$slideDown',
		animationDuration: '300ms',
		animationFillMode: 'forwards',
		animationDelay: '0s',
		animationTimingFunction: 'cubic-bezier(0.1, 0.23, 0.23, 1.44)',
		'&:nth-child(even)': {
			background: '#EEF2FF',
		},
	},
	'@keyframes slideDown': {
		from: {
			opacity: 0,
			transform: 'translateY(-10px)',
		},
		to: {
			opacity: 1,
			transform: 'translateY(0px)',
		},
	},
	space: {
		width: 300,
		height: 620,
		justifyContent: 'center',
	},
}))

const Frontpage = ({}) => {
	const classes = useStyles()
	const [isShown, setIsShown] = useState(false)
	const [colors, setcolor] = useState([])
	const [clr, setclr] = useState(false)

	const handleClick = () => {
		setIsShown((current) => !current)
	}
	function alertFunc(hex) {
		let tempcolors = []
		colors.forEach((clr) => {
			tempcolors.push(clr)
		})
		if (hex !== '') {
			tempcolors.push(hex)
		} else console.log(tempcolors)
		setcolor(tempcolors)
		setclr(true)
	}
	const removeBox = (color) => {
		const filteredTodos = colors.filter((v) => v !== color)
		setcolor(filteredTodos)
	}
	return (
		<div>
			<div className={classes.todoItem}>
				<Fab
					aria-label="add"
					onClick={handleClick}
					color="secondary"
					size="large"
					variant="extended"
				>
					<AddIcon sx={{ color: pink[200], fontSize: 40 }} />
				</Fab>

				{isShown == false && clr == false && <Welcomepage />}

				{isShown && (
					<OutlinedCard
						newFunc={alertFunc}
						count={isShown}
						changeState={handleClick}
					/>
				)}
			</div>

			<div>
				<ImageList sx={{ width: 1500, height: 600 }} cols={7} rowHeight={5}>
					{isShown == false &&
						colors.map((color) => {
							return <Newbox hexcolor={color} removeBox={removeBox} />
						})}
				</ImageList>
			</div>
		</div>
	)
}

export default Frontpage
