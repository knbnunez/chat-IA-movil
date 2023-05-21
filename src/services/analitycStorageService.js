import AsyncStorage from "@react-native-async-storage/async-storage";

const getResponsesToBotCount = async (messageType) => {
    const count =  messageType == "text" 
                    ? await AsyncStorage.getItem("text-responses-count")
                    : await AsyncStorage.getItem("image-responses-count");
    return count === null ? 0 : parseInt(count);
};

const incrementResponsesToBotCount = async (messageType) => {
    const currentCount = await getResponsesToBotCount(messageType);
    const newValue = (currentCount + 1).toString();
    return messageType == "text" 
        ? AsyncStorage.setItem("text-responses-count", newValue)
        : AsyncStorage.setItem("image-responses-count", newValue);
};

export { getResponsesToBotCount, incrementResponsesToBotCount };