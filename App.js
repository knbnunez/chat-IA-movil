import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatBox from './components/StatBox';
import ActivityBox from './components/ActivityBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.titleHome]}>Home</Text>
      <Text style={styles.title}>Overview</Text>

      <View style={styles.containerStatBox}>
        <StatBox />
        <StatBox />
        <StatBox />
      </View>

      <View style={styles.containerActivityBox}>
        <ActivityBox style={{ backgroundColor: '#FFF9F0' }} />
        <ActivityBox style={{ backgroundColor: '#F0F0FF' }} />
        <ActivityBox style={{ backgroundColor: '#FFF0FD' }} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Prioridad
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    // marginTop: 20,
    marginHorizontal: 20,
    fontSize: 20,
  },
  titleHome: {
    marginTop: 20,
    fontSize: 24,
    // color: 'red',
  },
  containerStatBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 50,
  },
  containerActivityBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 20,
    height: '50%',
  },
});
