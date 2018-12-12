import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Index from './pages';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import configureStore from './store';
import {Provider} from 'react-redux';

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0px;
		font-family: "Helvetica", "Arial", "sans-serif";
		font-size: 16px;
  }
`;

ReactDOM.render(
	<Provider store={store}>
		<Fragment> 
			<Index /> 
			<GlobalStyle/>  
		</Fragment>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
