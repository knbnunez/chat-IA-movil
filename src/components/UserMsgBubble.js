import { View, Text, Image } from 'react-native';

const UserTextBubble = ({msg, time}) => {
    return (
        <View
            key={msg}
            style={{
                backgroundColor: "#0070F0",
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
                marginLeft: "10%",
            }}
        >
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                {/* time */}
                <Text
                    style={{
                        color: "white",
                        fontFamily: 'DMSans',
                        fontSize: 15,
                        lineHeight: 24,
                        marginLeft: 2
                    }}
                >
                    {time}
                </Text>
                {/* User */}
                <Text
                    style={{
                        color: "white",
                        fontFamily: 'DMSans',
                        fontSize: 15,
                        lineHeight: 24,
                        textTransform: 'uppercase',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        marginBottom: 1,
                        marginRight: 1
                    }}
                >
                    YOU:
                </Text>
            </View>

            {/* Content Message */}
            <Text
                style={{
                    color: "white",
                    fontFamily: 'DMSans',
                    fontSize: 15,
                    lineHeight: 24,
                    textAlign: 'right'
                }}
            >
                {msg}
            </Text>
        </View>
    )
};

const UserImgBubble = ({uri}) => {
    // console.log("User: ", uri);
    return (
        <View
            key={uri}
            style={{
                backgroundColor: "#0070F0",
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
                marginLeft: "40%",
            }}
        >
            <Image source={{uri: uri}} style={{ width: 178, height: 230, borderRadius: 12, marginLeft: "0%"}}/>
        </View>
    )
};

export { UserTextBubble, UserImgBubble };