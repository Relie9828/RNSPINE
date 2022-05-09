import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import RegularText from '../Components/Fonts/RegularText';
import RegularContainer from '../Components/Containers/RegularContainer';
import OpacityButton from '../Components/Buttons/ButtonWithOpacity';

export default function Home ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <RegularContainer>
            <RegularText>Home</RegularText>
            <OpacityButton onPress={() => console.log('opacity button')}
            style={{ borderRadius: 10, }}>
                opacity button
            </OpacityButton>
        </RegularContainer>
    )
}