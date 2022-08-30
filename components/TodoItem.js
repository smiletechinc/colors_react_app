import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@mui/material/Fab'
import { pink } from '@mui/material/colors'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import OutlinedCard from './card'
import Newbox from './box'
import { Button } from '@material-ui/core'

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
}))

const TodoItem = ({}) => {
	const classes = useStyles()
	const [isShown, setIsShown] = useState(false)
	const [color, setcolor] = useState('')

	const handleClick = () => {
		setIsShown((current) => !current)
	}
	function alertFunc(data) {
		setcolor(data)
	}

	return (
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
			<Newbox hexcolor={color} />
			{isShown && (
				<OutlinedCard
					newFunc={alertFunc}
					count={isShown}
					changeState={handleClick}
				/>
			)}
		</div>
	)
}

export default TodoItem
