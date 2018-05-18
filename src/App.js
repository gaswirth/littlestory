import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { injectGlobal } from 'styled-components';
import { colors } from './styles.js';


class App extends Component {
	render() {
		return (
			<div>
				<Header title="littlestory" />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;


injectGlobal`
	body {
		font-size: 16px;
		background-color: ${colors.powderBlue};
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`;