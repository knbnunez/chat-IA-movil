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

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageScreen = () => {

    //             <View style={{ backgroundColor: 'green', height: '70%' }}>
    //                 <Text style={{ color: 'white', alignSelf: 'center' }}>Chat</Text>
    //             </View>
    //             <View style={{ backgroundColor: 'blue', height: '15%' }}>
    //                 <Text style={{ color: 'white', alignSelf: 'center' }}>Escribir un mensaje...</Text>
    //             </View>
    //         </SafeAreaView>
    //   );

    const [image, setImage] = useState(null);

    const _handleImagePress = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const navigation = useNavigation();

    const _handleCameraPress = () => navigation.navigate(ROUTES.CAMERA);

    return (
        <View style={styles.container}>
            {/* <View style={{ backgroundColor: 'red', height: '15%', justifyContent: 'center' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Canal de Texto</Text>
            </View> */}
            <StatusProfile style={{  }}></StatusProfile>
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
