import styled from 'styled-components';

const Grid = styled.div`
	border: 1px ${props=>props.theme.border} solid;
    border-radius: 4px;
	width:100%;
    padding:15px;
	display:grid;
	width:100%;
	grid-template-columns: 300px auto;
    grid-template-areas: "sidebar main";
    padding: 30px;
`;

export default Grid;
