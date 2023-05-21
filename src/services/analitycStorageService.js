import AsyncStorage from "@react-native-async-storage/async-storage";

const getResponsesToBotCount = async (massageType) => {
    const count =  massageType == "text" 
                    ? await AsyncStorage.getItem("text-responses-count")
                    : await AsyncStorage.getItem("image-responses-count");
    return count === null ? 0 : parseInt(count);
};

const incrementResponsesToBotCount = async (massageType) => {
    const currentCount = await getResponsesToBotCount(massageType);
    const newValue = (currentCount + 1).toString();
    return massageType == "text" 
        ? AsyncStorage.setItem("text-responses-count", newValue)
        : AsyncStorage.setItem("image-responses-count", newValue);
};

export { getResponsesToBotCount, incrementResponsesToBotCount };