import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import RegularText from '../Components/Fonts/RegularText';
import RegularContainer from '../Components/Containers/RegularContainer';
import RegularButton from '../Components/Buttons/ButtonWithOutOpacity';

export default function Profile ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <RegularContainer>
            <RegularText>Profile</RegularText>
            <RegularButton onPress={() => console.log('regular button')}
            style={{ borderRadius: 10, }}>Regular Button</RegularButton>
        </RegularContainer>
    )
}