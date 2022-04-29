import styled from 'styled-components';
import React, { useCallback } from 'react';
import { Dimension } from '../../App Functions/Dimensions';
import { ButtonColors } from '../Colors/ButtonColors';
import * as Haptics from 'expo-haptics';
import { Text } from 'react-native'

const { black, white } = ButtonColors;
const { height, width } = Dimension

const StyledButton = styled.TouchableOpacity`
    background-color: ${white};
    justifyContent: center;
    alignItems: center;
    padding-vertical: 10px;
    padding-horizontal: 20px;
    borderWidth: 2px;
    borderColor: ${black};
`;

export default function OpacityButton (props) {

    return (
        <StyledButton {...props}>
            <Text>
                {props.children}
            </Text>
        </StyledButton>
    )
}