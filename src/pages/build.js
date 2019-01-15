import React, { useEffect } from 'react';
import axios from 'axios';
import configs from '../configs';
import Build from '../blocks/Build';
import { ReactComponent as CreateSheetButton } from '../images/createSheetButton.svg';
import { ReactComponent as File } from '../images/File.svg';
import styled from 'styled-components';
import SubTitle from '../components/SubTitles';
import Title from '../components/Title';

const StyledCreateButton = styled(CreateSheetButton)`
	fill: green;
	cursor:pointer;
	&:active{
		position: relative;
    	top: 1px;
	}
`;

const StyledFile = styled(File)`
	fill: green;
	cursor:pointer;
	&:active{
		position: relative;
    	top: 1px;
	}
`;

const BaseComponent = () => {
	let sheets = null;

	useEffect(async () => {
		try {
			sheets = await axios.get(`${configs.urlPrefix}/sheets`);
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<Build>
			<Build.Center>
				<Build.Grid>
					<Build.Box>
						Options
						<Build.Row>
							<Build.Cell><StyledCreateButton height={20} width={20} /></Build.Cell>
							<Build.Cell>Create</Build.Cell>
						</Build.Row>
						<Build.Row>
							<Build.Cell><StyledFile height={20} width={20} /></Build.Cell>
							<Build.Cell>Load</Build.Cell>
						</Build.Row>
						<Build.Row>
							<Build.Cell><StyledCreateButton height={20} width={20} /></Build.Cell>
							<Build.Cell>Search</Build.Cell>
						</Build.Row>
						<Build.Row>
							<Build.Cell><StyledCreateButton height={20} width={20} /></Build.Cell>
							<Build.Cell>Favorites</Build.Cell>
						</Build.Row>
						<Build.Row>
							<Build.Cell><StyledCreateButton height={20} width={20} /></Build.Cell>
							<Build.Cell>Settings</Build.Cell>
						</Build.Row>
						<SubTitle style={{ marginTop: '15px', marginBottom: '15px' }}>Recently opened</SubTitle>
						<Build.Row>
							<Build.Cell><StyledCreateButton height={20} width={20} /></Build.Cell>
							<Build.Cell>Settings</Build.Cell>
						</Build.Row>
						<Build.Row>
							<Build.Cell><StyledCreateButton height={20} width={20} /></Build.Cell>
							<Build.Cell>Settings</Build.Cell>
						</Build.Row>
					</Build.Box>
				</Build.Grid>
			</Build.Center>
		</Build>
	);
};

export default BaseComponent;