import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const UserTextBubble = ({msg}) => {
    return (
        <View
            key={msg}
            style={{
                backgroundColor: "#0070F0",
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
                marginLeft: "10%",
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

const UserImgBubble = ({msg}) => {
    return (
        <View
            key={msg}
            style={{
                backgroundColor: "#0070F0",
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
                marginLeft: "10%",
            }}
        >
            <Image source={{msg}} style={{width: "100%", height: "100%"}}/>
        </View>
    )
};

export { UserTextBubble, UserImgBubble };