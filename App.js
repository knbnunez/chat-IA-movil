import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

import TabBar from './src/components/TabBar';

const App = () => {
  const [fontsLoaded] = useFonts({
    'DMSans': require('./assets/fonts/DMSans-Regular.ttf'),
    'DMSansBold': require('./assets/fonts/DMSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
      <TabBar/>
  );
};

export default App;
