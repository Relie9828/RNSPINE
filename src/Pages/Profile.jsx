import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import RegularText from '../Components/Fonts/RegularText';
import RegularContainer from '../Components/Containers/RegularContainer';
import RegularButton from '../Components/Buttons/ButtonWithOutOpacity';
import HorizontalFlatList from '../Components/Containers/HorizontalFlatList';

export default function Profile ({ navigation }) {

    return (
        <RegularContainer>
            <RegularText>Profile</RegularText>
            <RegularButton onPress={() => console.log('regular button')}
            style={{ borderRadius: 10, }}>Regular Button</RegularButton>
            <HorizontalFlatList />
        </RegularContainer>
    )
}