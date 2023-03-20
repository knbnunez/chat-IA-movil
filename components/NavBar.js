import { StyleSheet, View, Text } from 'react-native';

export default function NavBar(props) {
  const { children, customStyle } = props
  return (
    <View style={[styles.navBar, customStyle]}>

    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    shadowColor: "#FFF",
    shadowOffset: { width: 2.5, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
  },
});
