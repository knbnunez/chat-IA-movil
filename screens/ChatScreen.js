import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

const ChatScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'red', height: '15%' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Canal de Texto</Text>
            </View>
            <View style={{ backgroundColor: 'green', height: '70%' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Chat</Text>
            </View>
            <View style={{ backgroundColor: 'blue', height: '15%' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Escribir un mensaje...</Text>
            </View>
        </SafeAreaView>
  );
};

export default ChatScreen;
