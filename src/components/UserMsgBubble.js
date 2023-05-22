import { View, Text, Image } from 'react-native';

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
    // console.log("User: ", msg);
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
                marginLeft: "27.5%",
            }}
        >
            {/* TODO: darle style */}
            <Image source={{uri: msg}} style={{width: 200, height: 230, borderRadius: 12}}/>
        </View>
    )
};

export { UserTextBubble, UserImgBubble };