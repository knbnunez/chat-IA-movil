import { Text, View, Dimensions, Button, Image, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { ROUTES } from './../../routes';
import StatusProfile from "../components/StatusProfile";
import { sendChatImage } from '../services/IAService'

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageScreen = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const params = useRoute().params;
    const isFocused = useIsFocused();

    // Func nueva
    const sendImage = async (imageUri) => {
        const responseImg = await sendImageToChatbot(imageUri);
        setChatMessages((chatMessages) =>
            chatMessages.concat({ imageUri: responseImg, isUser: false })
        );
    };

    useEffect(() => {
        if (isFocused && params?.imageUri) {
            setChatMessages((chatMessages) =>
                chatMessages.concat({ imageUri: params.imageUri, isUser: true })
            );
            sendImage(params.imageUri);
            navigation.setParams({ imageUri: undefined });
        }
    }, [isFocused, params]);


    const _handleImagePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const _handleCameraPress = () => navigation.navigate(ROUTES.CAMERA);

    // Próximo a añadir entre otras cosas, pero quería dejar el comentario:
    // const navigateToCamera = () => {       // le estamos pasando addMessage como parámetro a la pantalla a la que estamos navegando
                                              // en realidad es un json { addMessage: addMessage }, pero que como vamos a llamarlo igual, podemos hacer esto { addMessage }
    //     navigation.navigate(ROUTES.CAMERA, { addMessage }); // Camera recibiría la definición de la función por parámetro
    //   };

    return (
        <View style={styles.container}>
            {/* <View style={{ backgroundColor: 'red', height: '15%', justifyContent: 'center' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Canal de Texto</Text>
            </View> */}
            <StatusProfile style={{}}></StatusProfile>
            <View>
                <Button title="Selecciona una imagen de tu galería" onPress={_handleImagePress} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <Button title="Cámara" onPress={_handleCameraPress} />
                <View style={styles.backgroundButtons}>
                    <FontAwesome name="camera" size={21} color="white" />
                    <Ionicons name="image" size={24} color="white" />
                </View>
            </View>
        </View>
    );
};

export default ImageScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    backgroundButtons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 110,
        height: 44,
        backgroundColor: "#303437",
        borderRadius: 48,
    },
});
