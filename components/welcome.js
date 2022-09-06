import React from 'react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const Gap = styled('div')`
	margin-top: 0px;
	padding: 0 500px;
	padding-top: 250px;
`

const Welcomepage = ({}) => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="80vh">
				<Box sx={{ bgcolor: '#cfe8fc', height: '89vh', borderRadius: '50px' }}>
					<Gap>
						<h2> No Colors created. Create Now</h2>
					</Gap>
				</Box>
			</Container>
		</React.Fragment>
	)
}

export default Welcomepage
