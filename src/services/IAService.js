const BASE_URL = "https://tnt2023.panaltesting.com.ar";

export default sendChatQuestion = async (message) => {
    const response = await fetch(`${BASE_URL}/chat?question=${message}.%20Respondeme%20en%20espa%C3%B1ol.`);
    return await response.json();
};  

