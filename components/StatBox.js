import { StyleSheet, View } from 'react-native';

export default function StatBox() {
  return (
    <View style={styles.statBox}/>
  );
}

const styles = StyleSheet.create({
  statBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 24,
  },
});
