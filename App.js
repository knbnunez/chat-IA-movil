import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{...styles.title, ...styles.titleHome}}>Home</Text>
      <Text style={styles.title}>Overview</Text>
      
      <View style={styles.containerBoxStats}>
        <View style={styles.boxStats}>
        </View>
        <View style={styles.boxStats}>
        </View>
        <View style={styles.boxStats}>
        </View>
      </View>
      
      <View style={styles.containerBoxActivitys}>
        <View style={[styles.boxActivity, {backgroundColor: '#FFF9F0'}]}>
        </View>
        <View style={[styles.boxActivity, {backgroundColor: '#F0F0FF'}]}>
        </View>
        <View style={[styles.boxActivity, {backgroundColor: '#FFF0FD'}]}>
        </View>
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
  containerBoxStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 50,
  },
  boxStats: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 24,
  },
  containerBoxActivitys: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 20,
    height: '50%',        
  },
  boxActivity: {
    // width: ,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 24,
  },
});
