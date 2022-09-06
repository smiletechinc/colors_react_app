import * as React from 'react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Container, Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Color from './color'
import Close from './close'
import Submit from './submit'

const useStyles = makeStyles(() => ({
	space: {
		width: 300,
		height: 650,
		justifyContent: 'center',
	},
}))

const Space = styled('div')`
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 0 auto;
	padding: 0 16px;
	height: 64px;
	max-width: 1024px;
`

const card = (
	<React.Fragment>
		<CardContent>
			<Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
				Real Time Color Card
			</Typography>
		</CardContent>
	</React.Fragment>
)

const red = createMuiTheme({
	overrides: {
		MuiSlider: {
			thumb: {
				color: 'red',
			},
			track: {
				color: 'red',
			},
			rail: {
				color: 'black',
			},
		},
	},
})

const green = createMuiTheme({
	overrides: {
		MuiSlider: {
			thumb: {
				color: 'green',
			},
			track: {
				color: 'green',
			},
			rail: {
				color: 'black',
			},
		},
	},
})

const blue = createMuiTheme({
	overrides: {
		MuiSlider: {
			thumb: {
				color: 'blue',
			},
			track: {
				color: 'blue',
			},
			rail: {
				color: 'black',
			},
		},
	},
})

export default function OutlinedCard(props) {
	const classes = useStyles()
	const [sliderValuer, setsliderValuer] = useState(0)
	const [sliderValueg, setsliderValueg] = useState(0)
	const [sliderValueb, setsliderValueb] = useState(0)

	const [text1, setText1] = useState('')
	const [text2, setText2] = useState('')
	const [text3, setText3] = useState('')
	const [text4, setText4] = useState('')

	const [val, setval] = useState('')

	function handleChange1(e, newvalue) {
		let s = Number(e.target.value)
		let x = Number(newvalue)

		setsliderValuer(newvalue)
		setsliderValuer(s)
		setText1(newvalue)
	}
	function handleChange2(e, newvalue) {
		let s = Number(e.target.value)
		let x = Number(newvalue)

		setsliderValueg(newvalue)
		setsliderValueg(s)
		setText2(newvalue)
	}
	function handleChange3(e, newvalue) {
		let s = Number(e.target.value)
		let x = Number(newvalue)

		setsliderValueb(newvalue)
		setsliderValueb(s)
		setText3(newvalue)
	}
	function handleChange4(e) {
		setText4(e.target.value)
	}
	function handleSubmit(e) {
		e.preventDefault()
		console.log(text1)
	}
	let red2 = (document.getElementById('red') || {}).value || ''
	let green2 = (document.getElementById('green') || {}).value || ''
	let blue2 = (document.getElementById('blue') || {}).value || ''

	var r = Number(red2)
	var g = Number(green2)
	var b = Number(blue2)

	const rgbToHex = (r, g, b) =>
		'#' +
		[r, g, b]
			.map((x) => {
				const hex = x.toString(16)
				return hex.length === 1 ? '0' + hex : hex
			})
			.join('')

	let colorhex = rgbToHex(r, g, b)

	const dataval = (value) => {
		setval(value)
	}

	useEffect(() => {
		{
			props.newFunc(val)
		}
	}, [val])

	return (
		<Container className={classes.space}>
			<h1> {props.data}</h1>

			<Box sx={{ borderRadius: '50px' }}>
				<Card
					className={classes.space}
					variant="outlined"
					sx={{ maxWidth: 600, borderRadius: '30px' }}
				>
					<Close changeState={props.changeState} />
					{card}
					<Space>
						<Color
							colorvalue={rgbToHex(r, g, b)}
							colorname={(document.getElementById('name') || {}).value || ''}
						/>
						<ThemeProvider theme={red}>
							<Slider
								//defaultValue={50}
								min={0}
								max={255}
								aria-label="Default"
								//valueLabelDisplay="auto"
								value={sliderValuer}
								onChange={handleChange1}
								color="primary"
							/>
						</ThemeProvider>

						<ThemeProvider theme={green}>
							<Slider
								//defaultValue={50}
								min={0}
								max={255}
								aria-label="Default"
								//valueLabelDisplay="auto"
								value={sliderValueg}
								onChange={handleChange2}
								color="primary"
							/>
						</ThemeProvider>

						<ThemeProvider theme={blue}>
							<Slider
								//defaultValue={50}
								min={0}
								max={255}
								aria-label="Default"
								value={sliderValueb}
								onChange={handleChange3}
								//valueLabelDisplay="auto"
								color="primary"
							/>
						</ThemeProvider>
						<p>
							R,G,B: ({red2}, {green2}, {blue2})
						</p>
						<p> Hex: {colorhex}</p>
						<div>
							<form onSubmit={handleSubmit}>
								<TextField
									id="red"
									value={text1}
									label="Enter value for Red"
									onChange={handleChange1}
									variant="standard"
								/>
								<TextField
									id="green"
									value={text2}
									label="Enter value for Green"
									onChange={handleChange2}
									variant="standard"
								/>
								<TextField
									id="blue"
									value={text3}
									label="Enter value for Blue"
									onChange={handleChange3}
									variant="standard"
								/>
								<TextField
									id="name"
									value={text4}
									label="Color Name"
									onChange={handleChange4}
									variant="standard"
								/>
							</form>
						</div>
						<Submit
							colorvalue={rgbToHex(r, g, b)}
							colorname={(document.getElementById('name') || {}).value || ''}
							dataFunc={dataval}
							//storage={props.storage}
						/>
					</Space>
				</Card>
			</Box>
		</Container>
	)
}
