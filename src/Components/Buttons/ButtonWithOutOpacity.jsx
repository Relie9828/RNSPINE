import styled from 'styled-components';
import React, { useCallback } from 'react';
import { Dimension } from '../../App Functions/Dimensions';
import { ButtonColors } from '../Colors/ButtonColors';
import * as Haptics from 'expo-haptics';
import { Text } from 'react-native'

const { black, white } = ButtonColors;
const { height, width } = Dimension

const StyledButton = styled.Pressable`
    background-color: ${white};
    justifyContent: center;
    alignItems: center;
    borderWidth: 2px;
    borderColor: ${black};
    padding-vertical: 10px;
    padding-horizontal: 20px;
`;

export default function RegularButton (props) {

    return (
        <StyledButton {...props}>
            <Text>
                {props.children}
            </Text>
        </StyledButton>
    )
}