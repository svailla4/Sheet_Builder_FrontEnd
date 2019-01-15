import styled from 'styled-components';
import Center from './Center';
import Row from './Row';
import Cell from './Cell';
import Box from './Box';
import Grid from './Grid';

const Build = styled.div`
    display: grid;
    grid-gap: 0px;
    margin-top: 15px;
    grid-template-columns:  auto 1800px auto;
    grid-template-areas: "... center ...";
    padding: 30px;
`;

Build.Center = Center;
Build.Box = Box;
Build.Row = Row;
Build.Cell = Cell;
Build.Grid = Grid;

export default Build;