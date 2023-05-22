import { View, Text, Image } from 'react-native';

const IATextBubble = ({msg}) => {
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

const IAImgBubble = ({msg}) => {
    // console.log("IA: ", msg);
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
                marginRight: "27.5%",
            }}
        >
            <Image source={{uri: msg}} style={{ width: 200, height: 230, borderRadius: 12}}/>
        </View>
    )
};

export { IATextBubble, IAImgBubble };