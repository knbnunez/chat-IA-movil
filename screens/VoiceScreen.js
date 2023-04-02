import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes';

// const Stack = createNativeStackNavigator();

const VoiceScreen = () => {
    

    return (
        <SafeAreaView>
            <Text>Canal de Voz</Text>

        </SafeAreaView>
  );
};

export default VoiceScreen;
