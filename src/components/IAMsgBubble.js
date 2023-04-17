import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default IAMsgBubble = ({msg}) => {
    return (
        <View
            key={msg}
            style={{
                backgroundColor: "gray",
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                marginRight: "10%",
            }}
        >
            <Text
                style={{
                    color: "white",
                    fontFamily: 'DMSans',
                    fontSize: 15,
                    lineHeight: 24,
                }}
            >
                {msg}
            </Text>
        </View>
    )
};