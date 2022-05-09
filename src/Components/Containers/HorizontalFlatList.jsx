import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert, Platform } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { BackgroundColors } from '../Colors/BackgroundColors';
import { Dimension } from '../../App Functions/Dimensions';
import { FontColors } from '../Colors/FontColors';

export default function HorizontalFlatList (props) {

    const {black, white} = BackgroundColors
    const {height, width} = Dimension
    const {FontBlack, FontWhite} = FontColors

    const [data, setData] = useState([
        {id: 1, list: 'jake'},
        {id: 2, list: 'james'},
        {id: 3, list: 'Jess'},
    ]);

    const Item = ({ item }) => {
        return (
            <View style={{ 
                marginLeft: 5,
                borderRadius: 7,
                paddingVertical: 10,
                alignSelf: 'center', 
                paddingHorizontal: 22, 
                backgroundColor: black,
                justifyContent: 'center', 
            }}>
                <Text style={{ color: FontWhite,  }}>
                    {item.list}
                </Text>
            </View>
        )
    };

    return (
        <View style={{ width: width, height: 50, borderColor: black, }}>
            <FlatList horizontal 
            contentContainerStyle={ Platform.select({
                default:{ paddingLeft: 20, paddingRight: 0, }
                })
            }
            keyExtractor={(item) => item.id}
            renderItem={Item}
            data={data} />
        </View>
    )
}