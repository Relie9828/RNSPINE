import { BackgroundColors } from '../Colors/BackgroundColors';
import styled from 'styled-components';
import React from 'react';
import { Dimension } from '../../App Functions/Dimensions';

const { black, white } = BackgroundColors;
const { height, width } = Dimension

const StyledView = styled.View`
    background-color: ${white};
    justifyContent: center;
    alignItems: center;
    height: ${height}px; 
    width: ${width}px;
`;

export default function RegularContainer (props) {

    return (
        <StyledView {...props}>{props.children}</StyledView>
    )
}