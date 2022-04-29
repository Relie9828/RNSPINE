import { FontColors } from '../Colors/FontColors';
import styled from 'styled-components'
import { Font } from './FontFamily';
import {Text} from 'react-native';
import React from 'react';

const { nunitoMedium, gloryMedium, regular } = Font
const { black, white } = FontColors

const StyledText = styled.Text`
    font-family: ${regular};
    font-size: 17px;
`;

export default function RegularText (props) {
    
    return (
        <StyledText {...props}>
            {props.children}
        </StyledText>
    )
}