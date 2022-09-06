import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@mui/material'
import { Button } from '@material-ui/core'

const Gap = styled('div')`
	margin-top: 150px;
	padding: 0 600px;
	padding-top: 1px;
`

function printname() {
	const name = (document.getElementById('username') || {}).value || ''
	console.log(name)
	alert('You logged in successfully ')
}
export function Login() {
	return (
		<Gap>
			<h1> Login To Colors App</h1>
			<form>
				<TextField
					id="username"
					label="Enter UserName or Email"
					variant="standard"
				/>
				<TextField id="password" label="Enter Password" variant="standard" />
			</form>
			<Button
				variant="outlined"
				size="medium"
				onClick={printname}
				href="http://localhost:3000/"
			>
				{' '}
				Submit{' '}
			</Button>
		</Gap>
	)
}

export default Login
