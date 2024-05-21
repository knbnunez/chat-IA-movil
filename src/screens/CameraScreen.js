import { useNavigation, useRoute } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { manipulateAsync } from "expo-image-manipulator";

// Icons
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

import { ROUTES } from "../../routes";

export default CameraScreen = () => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const params = useRoute().params;
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) { // Camera permissions are still loading
    return null;
  }

  if (!permission.granted) { // Camera permissions are not granted yet
    return (
      // Vimos que en IOs se rompe... a corregir.
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center", paddingBottom: 20 }}>
          Necesitamos acceso a la cámara
        </Text>
        <Button onPress={requestPermission} title="Permitir" />
      </View>
    );
  }

  function toggleCameraType() {
    const newType =
      type === CameraType.back ? CameraType.front : CameraType.back;
    setType(newType);
  }

  const takePicture = async () => {
    if (camera.current) {
      const data = await camera.current.takePictureAsync();
      const resized = await manipulateAsync(data.uri, [
        { resize: { height: 100 } },
      ]);
      setImage(resized.uri);
      params?.addUserMsg(resized.uri);
      navigation.goBack();
    } else {
      console.warn("Cámara no lista");
    }
  };

  return (
    <View style={{ gap: 5 }}>
      <Camera ref={camera} style={styles.box} type={type} ratio="16:9">
        <TouchableOpacity style={styles.takePictureContainer} onPressIn={takePicture}>
          <Feather name="camera" size={24} color="white" />
        </TouchableOpacity>
        <Ionicons name="camera-reverse" style={styles.toggleCamera} size={28} color="white" onPress={toggleCameraType} />
        <Ionicons name="arrow-back-circle" style={styles.backButton} size={32} color="white" onPress={() => navigation.goBack()} />
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  takePictureContainer: {
    width: "21%",
    height: "11%",
    bottom: "-85%",
    left: "39%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 100,
    borderWidth: 6,
    borderColor: "grey"
  },
  toggleCamera: {
    bottom: "-77.5%",
    left: "15%",
  },
  backButton: {
    bottom: "8%",
    left: "5%",
  },
});