import { Text, View, Dimensions, Button, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ROUTES } from './../../routes';

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
        <SafeAreaView>
            <View style={{ backgroundColor: 'red', height: '15%', justifyContent: 'center' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Canal de Texto</Text>
            </View>
            <View style={{ backgroundColor: 'green', height: '70%', justifyContent: 'space-around' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Chat</Text>
                
                <Button title="Selecciona una imagen de tu galería" onPress={_handleImagePress} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                <Button title="Cámara" onPress={_handleCameraPress} />
            </View>
            <View style={{ backgroundColor: 'blue', height: '15%' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>Escribir un mensaje...</Text>
            </View>
        </SafeAreaView>
    );
};

export default ImageScreen;
