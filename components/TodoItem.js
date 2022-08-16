import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@mui/material/Fab';
import { pink } from '@mui/material/colors';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import OutlinedCard from './card';

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
	}
}))
const handleClick = event => {
		
	setIsShown(current => !current);

	};
const TodoItem = ({  }) => {
	const classes = useStyles()
	const [isShown, setIsShown] = useState(false);

	const handleClick = event => {
		
		setIsShown(current => !current);

		};
	
	return (
		<div className={classes.todoItem}>
		<Fab 
				aria-label="add" 
				onClick={handleClick}
				color="secondary"
 				size="large" 
				variant='extended'>
			
			<AddIcon sx={{ color: pink[200], fontSize: 40}}/>
					
		</Fab>
		
		{isShown && <OutlinedCard count={isShown} changeState={(count)=>handleClick(!count)}/>}	
		</div>
	);
	
	}
	
export default TodoItem
