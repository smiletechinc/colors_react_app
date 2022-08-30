import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const Space = styled('div')`
	margin-top: 20px;
	padding: 0 90px;
`

export default function Submit(props) {
	const useStyles = makeStyles(() => ({
		color: {
			backgroundColor: props.colorvalue,
		},
	}))
	const classes = useStyles()

	let hex = props.colorvalue
	let name = props.colorname

	const addcolor = () => {
		{
			props.dataFunc(hex)
		}
	}

	return (
		<>
			<Space>
				<Button variant="outlined" size="medium" onClick={addcolor}>
					submit
				</Button>
			</Space>
		</>
	)
}
