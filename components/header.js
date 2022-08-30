import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
// import { Link } from '@material-ui/core';

const HeaderRoot = styled(`header`)`
	left: 0;
	width: 100%;
	height: 64px;
	position: sticky;
	top: 0px;
	z-index: 1000;
`

const HeaderContainer = styled('div')`
	background: rgba(255, 255, 255, 0.98);
	box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`

const NavRoot = styled('nav')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 0 auto;
	//padding: 0 16px;
	height: 64px;
	max-width: 1024px;
`

const ListItem = styled('div')`
	display: flex;
	padding: 0px 16px;
`

const ListActions = styled('div')`
	display: flex;
`

const Space = styled('div')`
	flex: 1 1 auto;
`

const Space1 = styled('div')`
	flex: 9 9 auto;
`

const Dropdown = styled('div')`

  .dropbtn {
    color: blue;

  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    
    z-index: 1;
  }
  
  .dropdown-content a {
    color: seagreen;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
  }
  
  .dropdown-content a:hover {background-color: #f1f1f1}
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  

  }
`

const Link = styled.a`
	color: seagreen;
	&:hover {
		cursor: pointer;
		color: #000;
	}
`

export function Header({ t }) {
	return (
		<HeaderRoot>
			<HeaderContainer>
				<NavRoot>
					<Space />
					<h1>Colors App</h1>
					<Space1 />
					<Space1 />
					<Space1 />

					<ListItem>
						<h3>
							<Link href="http://localhost:3000/Login">Login</Link>
						</h3>
					</ListItem>

					<Space />

					<ListActions></ListActions>
				</NavRoot>
			</HeaderContainer>
		</HeaderRoot>
	)
}

Header.propTypes = {
	t: PropTypes.func,
}

export default Header
