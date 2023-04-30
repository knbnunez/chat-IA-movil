const BASE_URL = "https://tnt2023.panaltesting.com.ar";

const sendChatQuestion = async (message) => {
    const response = await fetch(`${BASE_URL}/chat?question=${message}.%20Respondeme%20en%20espa%C3%B1ol.`);
    return await response.json();
};

const sendChatImage = async (imageUri) => {
    let formData = new FormData();
    formData.append("image", {
        uri: imageUri,
        name: "image.jpg",
        type: "image/jpg",
    });
    const response = await fetch(`${BASE_URL}/image`, {
        method: "POST",
        body: formData,
    });
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64String = reader.result;
            resolve(base64String);
        };
    });
};

export { sendChatQuestion, sendChatImage };