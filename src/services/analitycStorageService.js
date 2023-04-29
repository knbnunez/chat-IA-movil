import AsyncStorage from "@react-native-async-storage/async-storage";

const getTextResponsesCount = async () => {
    const count = await AsyncStorage.getItem("text-responses-count");
    return count === null ? 0 : parseInt(count);
};

const incrementTextResponsesCount = async () => {
    const currentCount = await getTextResponsesCount();
    const newValue = (currentCount + 1).toString();
    return AsyncStorage.setItem("text-responses-count", newValue);
};

// repite lo mismo pero para "image-responses-count"
const getImageResponsesCount = async () => {
    const count = await AsyncStorage.getItem("image-responses-count"); // Esto es lo único que cambia
    return count === null ? 0 : parseInt(count);
};

const incrementImageResponsesCount = async () => {
    const currentCount = await getImageResponsesCount(); // Y esto cambia porque debe llamar a la función que le traiga el currentCount, pero podría arreglarse con envío de parámetros
    const newValue = (currentCount + 1).toString();
    return AsyncStorage.setItem("image-responses-count", newValue); // Esto es lo único que cambia
};

export {
    getTextResponsesCount,
    incrementTextResponsesCount,
    getImageResponsesCount,
    incrementImageResponsesCount,
};