import { Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.HOME}>
        <Stack.Screen name={ROUTES.HOME} component={HomeScreen}/>
        <Stack.Screen name={ROUTES.CHAT} component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
