import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { ROUTES } from "../../routes";
import { sendChatImage } from "../services/IAService";
import { incrementResponsesToBotCount } from "../services/analitycStorageService";
import StatusProfile from "../components/StatusProfile";
import { UserImgBubble } from '../components/UserMsgBubble';
import { IAImgBubble } from '../components/IAMsgBubble';
import * as ImagePicker from 'expo-image-picker';

export default ImageScreen = () => {
    const navigation = useNavigation();
    const scrollViewRef = useRef(null);
    const params = useRoute().params;
    const isFocused = useIsFocused();
    const [msgs, setMsgs] = useState([]);

    const sendImage = async (imageUri) => {
        try {
            const answer = await sendChatImage(imageUri);
            incrementResponsesToBotCount('image'); 
            setMsgs((msgs) => msgs.concat({ imageUri: answer, isUser: false }));
        } catch (error) {
            console.warn("Error al hacer el envío: ", error);
        }
    };

    const addUserMsg = (imageUri) => {
        setMsgs((msgs) => msgs.concat({ imageUri: imageUri, isUser: true }));
        sendImage(imageUri);
    };

    useEffect(() => {
        if (isFocused) {
            setTimeout(() => {
                scrollViewRef.current?.scrollToEnd({ animated: true });
            }, 1000);
        }
    }, [isFocused]);

    const navigateToCamera = () => {
        navigation.navigate(ROUTES.CAMERA, { addUserMsg });
    };

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            aspect: [100, 100],
            quality: 0,
        });
        result.canceled === false
            ? addUserMsg(result.uri) 
            : alert('No se seleccionó ninguna imagen.');
    };

    return (
        <View style={styles.container}>
            <StatusProfile title="Canal de Imagen" />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{ gap: 20 }}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {msgs.map((msg, idx) => (
                    msg.isUser
                        ? <UserImgBubble msg={msg.imageUri} idx={`msg-${idx}`} />
                        : <IAImgBubble msg={msg.imageUri} idx={`msg-${idx}`} />
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <Ionicons
                    name="camera"
                    size={24}
                    color="white"
                    onPress={navigateToCamera}
                />
                <Ionicons 
                    name="image" 
                    size={24} 
                    color="white" 
                    onPress={pickImageAsync}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    scrollView: { 
        height: Dimensions.get("screen").height * 0.7, 
        width: Dimensions.get("screen").width, 
        paddingHorizontal: "7%",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        width: 100,
        padding: 10,
        marginBottom: 15,
        borderRadius: 19,
        borderWidth: 0.33,
        borderColor: "#696969",
        position: "absolute",
        bottom: "1.5%",
        left: "39%",
    },
});