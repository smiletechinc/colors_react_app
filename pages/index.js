import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@material-ui/core'

const Gap = styled('div')`
	margin-top: 150px;
	padding: 0 600px;
	padding-top: 1px;
`
export default function Index() {
	return (
		<Gap>
			<h1> You are not logged in.</h1>
			<div>
				<h1> Login to create your own collection of colors</h1>
				<Button
					variant="outlined"
					size="medium"
					href="http://localhost:3000/login"
				>
					{' '}
					Log In{' '}
				</Button>
			</div>
			<div>
				<h1> Proceed without logging in? </h1>

				<Button
					variant="outlined"
					size="medium"
					href="http://localhost:3000/firstpage"
				>
					{' '}
					Proceed{' '}
				</Button>
			</div>
		</Gap>
	)
}
