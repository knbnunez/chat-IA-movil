import { View, Text, Image } from 'react-native';

const IATextBubble = ({userMsg, msg, time}) => {
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
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                {/* User */}
                <Text
                    style={{
                        color: "white",
                        fontFamily: 'DMSans',
                        fontSize: 15,
                        lineHeight: 24,
                        textTransform: 'uppercase',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginBottom: 1,
                        marginLeft: 1
                    }}
                >
                    {userMsg}:
                </Text>
                {/* Time */}
                <Text
                    style={{
                        color: "white",
                        fontFamily: 'DMSans',
                        fontSize: 15,
                        lineHeight: 24,
                        marginRight: 2
                    }}
                >
                    {time}
                </Text>
            </View>
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

const IAImgBubble = ({uri}) => {
    return (
        <View
            key={uri}
            style={{
                backgroundColor: "gray",
                paddingVertical: 10,
                // paddingHorizontal: 12,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                marginRight: "40%",
            }}
        >
            <Image source={{uri: uri}} style={{ width: 178, height: 230, borderRadius: 12, marginLeft: "6%"}}/>
        </View>
    )
};

export { IATextBubble, IAImgBubble };