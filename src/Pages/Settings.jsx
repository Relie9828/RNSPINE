import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';

export default function Settings ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', }}>
            <Text>Settings</Text>
        </View>
    )
}