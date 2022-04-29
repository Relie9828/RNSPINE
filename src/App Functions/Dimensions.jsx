import { Dimensions } from 'react-native';
import React from 'react';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export const Dimension = {
    width: deviceWidth,
    height: deviceHeight,
} 