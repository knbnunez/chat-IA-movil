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

// const styleFocused = (focused, componentName, tabName) => {
//     const iconColor = 'gray';
//     // const componentName = componentName;
//     if (focused) {
//         iconColor = 'white';
//         return (
//             <View style={{backgroundColor: 'black'}}>
//                 <componentName size={20} color={iconColor} />
//                 <Text>tabName</Text>
//             </View> 
//         );
        
//     } else {
//         return <componentName size={20} color={iconColor} />
//     }
// }

const TabBar = () => {
    return (
        <NavigationContainer>
            <View style={{ 
                flex: 1, 
                // backgroundColor: 'green' 
                backgroundColor: '#191A1B' 
            }}>
            <Tab.Navigator 
                initialRouteName={ROUTES.HOME}
                screenOptions={{
                    // Para el texto
                    // tabBarActiveTintColor: 'purple',
                    // tabBarInactiveTintColor: 'gray',
                    // tabBarLabel: null, // No me funcionó
                    tabBarShowLabel: false, // Este sí
                    tabBarStyle: { 
                        marginHorizontal: 25, 
                        borderRadius: 22, 
                        backgroundColor: 'white',
                        height: '9%',
                        shadowColor: "#FFF", //DarkMode
                        // shadowColor: "#000",
                        shadowOffset: { width: 2.5, height: 1.5 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2.5,
                        elevation: 5
                    },
                }}
            >
                <Tab.Screen 
                    name={ROUTES.HOME} 
                    component={HomeScreen} 
                    options={{ 
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => { // Es lo mismo que hacer: tabBarIcon: (params) => { const {color, size} = params; ...}                  
                            // const componentName = 'Entypo';
                            // const tabName = 'Inicio';
                            // styleFocused(focused, componentName);
                            
                            // if (focused) {
                            //     const iconColor = 'white';
                            //     return (
                            //         <View style={{backgroundColor: 'black'}}>
                            //             <Entypo  size={20} color={iconColor} />
                            //         </View>
                            //     )    
                            // } else {
                            //     const iconColor = 'gray';
                            //     return <Entypo  size={20} color={iconColor} />
                            // }

                            const iconColor = focused ? 'black' : 'gray';
                            return <Entypo name="home" size={20} color={iconColor} /> // Si solo hace esto
                        }
                    }}  
                />
                <Tab.Screen 
                    name={ROUTES.CHAT} 
                    component={ChatScreen}
                    options={{ 
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            const iconColor = focused ? 'black' : 'gray';
                            return <Ionicons name="image" size={20} color={iconColor} /> // Si solo hace esto
                        }
                    }}  
                />
                <Tab.Screen 
                    name={ROUTES.IMAGE} 
                    component={ImageScreen}
                    options={{ 
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            // const iconColor = focused ? 'black' : 'gray';
                            // return ( // Ejemplo:
                            //     <View style={{backgroundColor: 'black'}}>
                            //         <Ionicons name="chatbubbles" size={20} color={iconColor} />
                            //     </View>
                            // );

                            const iconColor = focused ? 'black' : 'gray';
                            return <Ionicons name="chatbubbles" size={20} color={iconColor} />
                        },
                        
                    }}  
                />
                <Tab.Screen 
                    name={ROUTES.VOICE} 
                    component={VoiceScreen}
                    options={{ 
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            const iconColor = focused ? 'black' : 'gray';
                            return <FontAwesome name="microphone" size={20} color={iconColor} />
                        }
                    }}  
                />
                {/* Hidden */}
                <Tab.Screen 
                    name={ROUTES.CAMERA} 
                    component={CameraScreen}
                    options={{ tabBarButton: () => null, tabBarVisible: false }}
                />
            </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
};

export default TabBar;
