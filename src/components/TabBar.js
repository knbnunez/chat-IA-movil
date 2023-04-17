import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';

import { ROUTES } from '../../routes';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ImageScreen from '../screens/ImageScreen';
import VoiceScreen from '../screens/VoiceScreen';
import CameraScreen from '../screens/CameraScreen';

const Tab = createBottomTabNavigator();

// Componente
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
        component: ImageScreen,
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
                screenOptions={{
                    // Para el texto
                    // tabBarActiveTintColor: 'purple',
                    // tabBarInactiveTintColor: 'gray',
                    // tabBarLabel: null, // No me funcionó
                    tabBarShowLabel: false, // Este sí
                    tabBarStyle: { // Dejó de ser flotante el TabBar
                        paddingHorizontal: "2%",
                        height: "8%",
                        // marginHorizontal: 25, 
                        // borderRadius: 22, 
                        // backgroundColor: 'red',
                        // height: '9%',
                        // shadowColor: "#FFF", //DarkMode
                        // // shadowColor: "#000",
                        // shadowOffset: { width: 2.5, height: 1.5 },
                        // shadowOpacity: 0.2,
                        // shadowRadius: 2.5,
                        // elevation: 5
                    },
                }}
            >
                {tabScreenData.map((data) => <Tab.Screen {...data}/>)}
                {/* Hidden */}
                <Tab.Screen 
                    name={ROUTES.CAMERA} 
                    component={CameraScreen}
                    options={{ tabBarButton: () => null, tabBarVisible: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabBar;
