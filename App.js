import { Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from './routes';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={ROUTES.HOME}>
        <Tab.Screen name={ROUTES.HOME} component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name={ROUTES.CHAT} component={ChatScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
