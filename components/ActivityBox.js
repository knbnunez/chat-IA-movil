import { StyleSheet, View } from 'react-native';

export default function ActivityBox(props) {
    const { style: customStyle } = props
    // console.log(customStyle);
    return (
        <View style={[style.activityBox, customStyle]} />
    );
}

const style = StyleSheet.create({
    activityBox: {
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 24,
    },
});
