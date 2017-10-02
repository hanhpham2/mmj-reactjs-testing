export const addMessage = (message) => {
    console.log("You just added: ", message.text);
    return {
        type: 'ADD_MESSAGE',
        payload: message
    }
};
