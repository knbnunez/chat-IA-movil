import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { ROUTES } from '../../routes';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ImageScreen from '../screens/ImageScreen';
import VoiceScreen from '../screens/VoiceScreen';
import CameraScreen from '../screens/CameraScreen';

const Tab = createBottomTabNavigator();
const ImageStack = createStackNavigator();

const ImageNavigator = () => (
    <ImageStack.Navigator screenOptions={{ headerShown: false }}>
        <ImageStack.Screen name={ROUTES.IMAGE_CHANNEL} component={ImageScreen} />
        <ImageStack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
    </ImageStack.Navigator>
);

// Componente Custom
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
    // {
    //     name: ROUTES.IMAGE,
    //     component: ImageScreen,
    //     options: {
    //         headerShown: false,
    //         tabBarIcon: ({ focused }) => <CustomIcon focused={focused} iconName="image" label="IMAGEN" />
    //     }
    // },
    {
        name: ROUTES.IMAGE,
        component: ImageNavigator,
        options: {
            headerShown: false,
            tabBarIcon: ({ focused }) => <CustomIcon focused={focused} iconName="image" label="IMAGEN" />
        }
    },
    {
        name: ROUTES.VOICE,
        component: VoiceScreen,
        options: {
            headerShown: false,
            tabBarIcon: ({ focused }) => <CustomIcon focused={focused} iconName="mic" label="VOZ" />
        }
    },
];

const TabBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={ROUTES.HOME}
                screenOptions={{ tabBarShowLabel: false, tabBarStyle: { paddingHorizontal: "2%", height: "8%" } }}
            >
                { tabScreenData.map((data) => <Tab.Screen {...data} />) }
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabBar;
