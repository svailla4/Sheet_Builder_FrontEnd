import React from 'react';
import Header from '../components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../components/Flex';
import Register from './register';
import Login from './login';
import Home from './home';
import Build from './build';

const Container = styled(Flex)`
    flex-direction: column;
`;

const AsyncApp = ()=> (
	<Router>
		<Container>
			<Header/>
			<Route exact path="/" component={Home} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/build" component={Build}/>
		</Container>
	</Router>
);
  
export default AsyncApp;