import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@ui-kitten/components';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import React from 'react';

const Homestack = createStackNavigator();
export function HomeStackScreen () {
    return (
        <Homestack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
            <Homestack.Screen name='home' component={BottomTab}/>
        </Homestack.Navigator>
    )
};

const ProfileStack = createStackNavigator();
export function ProfileStackScreen () {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='profile'>
            <ProfileStack.Screen name='profile' children={props => <Profile {...props} /> }/>
        </ProfileStack.Navigator>
    )
};

const TabNavigation = createBottomTabNavigator();
export function BottomTab () {
    return (
        <TabNavigation.Navigator screenOptions={({ route }) => ({  
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: true,
          headerShown: false,
          tabBarStyle:{
            ...Platform.select({
              ios: { 
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                position: 'absolute',
                borderTopWidth: 0,
                padding: 5,
              },
              android: { 
                padding: 5, 
                borderTopWidth: 0,
                position: 'absolute',
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
              }
            }),
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
              color = focused ? 'black' : 'lightgray';
              return <Icon name={iconName} width={28} height={28} fill={color} />;
            } 
            if (route.name === 'Profile') {
              iconName = focused ? 'person-outline' : 'person-outline';
              color = focused ? 'black' : 'lightgray';
              return <Icon width={28} height={28} fill={color} name={iconName} />;
            }
          },
        })}>
            <TabNavigation.Screen name='Home' children={props => <Home {...props} /> } />
            <TabNavigation.Screen name='Profile' component={ProfileStackScreen} />
        </TabNavigation.Navigator>
    )
}
