import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './styles.js';

const HeaderEl = styled.header`
	width: 100%;
	height: auto;
	text-align: center;
	background-color: ${colors.lightBlue};
`;

const HeaderTitle = styled.h1`
	margin: 0;
	padding: 0.5em 0;
	color: ${colors.white};
	font-size: 1.5em;
`;

class Header extends Component {
	render() {
		return (
			<HeaderEl>
				<HeaderTitle className="title">{this.props.title}</HeaderTitle>
			</HeaderEl>
		)
	}
}

export default Header;