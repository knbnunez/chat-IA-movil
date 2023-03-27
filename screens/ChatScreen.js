import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

const ChatScreen = () => {
    

    return (
        <SafeAreaView>
            <Text>Hola</Text>

        </SafeAreaView>
  );
};

export default ChatScreen;
