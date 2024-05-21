import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { ROUTES } from '../../routes';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ImageScreen from '../screens/ImageScreen';
import CommonRoomScreen from '../screens/CommonRoomScreen';
import CameraScreen from '../screens/CameraScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ImageNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.IMAGE_CHANNEL} component={ImageScreen} />
        <Stack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
    </Stack.Navigator>
);

// TEST
const CommonRoomNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
        <Stack.Screen name={ROUTES.COMMON} component={CommonRoomScreen} />
    </Stack.Navigator>
);
// TEST

// Custom Component
const CustomIcon = ({ focused, iconName, label }) => (
    <View
        style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: focused ? "black" : "transparent",
            padding: 10,
            borderRadius: 30,
            height: 40,
        }}
    >
        <Ionicons name={iconName} size={21.5} color={focused ? "white" : "#72777A"} />
        {focused && <Text style={{ color: "white" }}>{label}</Text>}
    </View>
);

const tabScreenData = [
    {
        name: ROUTES.HOME,
        component: HomeScreen,
        options: {
            headerShown: false,
            tabBarIcon: ({ focused }) => <CustomIcon focused={focused} iconName="home" label="INICIO" />,
        }
    },
    {
        name: ROUTES.CHAT,
        component: ChatScreen,
        options: {
            headerShown: false,
            tabBarIcon: ({ focused }) => <CustomIcon focused={focused} iconName="chatbubbles-sharp" label="TEXTO" />
        }
    },
    {
        name: ROUTES.IMAGE,
        component: ImageNavigator,
        options: {
            headerShown: false,
            tabBarIcon: ({ focused }) => <CustomIcon focused={focused} iconName="image" label="IMAGEN" />
        }
    },
    {
        name: ROUTES.COMMON,
        component: CommonRoomNavigator,
        options: {
            headerShown: false,
            tabBarIcon: ({ focused }) => <CustomIcon focused={focused} iconName="people" label="SALA" />
        }
    },
];


const TabBar = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={ROUTES.HOME}
                    screenOptions={{
                        tabBarShowLabel: false, 
                        tabBarStyle: { paddingHorizontal: "2%", height: "8%" },
                    }}
                >
                    { tabScreenData.map((data) => <Tab.Screen {...data} key={data.name}/>) }
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
};

export default TabBar;
