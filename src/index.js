import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Index from './pages';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import configureStore from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0px;
		font-family: "Helvetica", "Arial", "sans-serif";
		font-size: 16px;
  }
`;

const theme = {
	main: '#3D66B0',
	mainLighter1: '#5780CA',
	mainLighter2: '#7099E3',
	foreground: 'white',
	error: '#cc0000',
	border: '#cfcfcf'
}

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Fragment>
				<Index />
				<GlobalStyle />
			</Fragment>
		</ThemeProvider>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
