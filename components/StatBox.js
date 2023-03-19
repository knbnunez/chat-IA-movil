import { StyleSheet, View } from 'react-native';

export default function StatBox(props) {
  const { style: customStyle, children } = props
  return (
    <View style={[styles.statBox, customStyle]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  statBox: {
    width: 98.33,
    height: 118,
    backgroundColor: '#fff',
    borderRadius: 24,
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: 'Red',
  },
});
