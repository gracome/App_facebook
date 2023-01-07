import Axioss from './messenger';
let addChat = (chat) => {
    return Axioss.post('/chat/add', chat);
}
let register = (user) => {
    return Axioss.post('/user/add', user);
}
let allChat = (chat) => {
    return Axioss.get('/chat/all', chat);
}

let openChat = (chat) => {
    return Axioss.put('/chat/openchat', chat);
}

let closedChat = (chat) => {
    return Axioss.put('/chat/closechat', chat);
}
let allchatByAgent = (chat) => {
    return Axioss.get('/chat/allbyAgent', chat);
}
let deleteChat = (chat) => {
    return Axioss.delete('/chat/delete', chat);
}
let Findmessage = (chatId) => {
    console.log("gghg", chatId)
    return Axioss.get(`conversations/${chatId}/messages`, chatId);
}

export const chatService = {
    addChat,
    allChat,
    allchatByAgent,
    openChat,
    closedChat,
    deleteChat,
    register,
    Findmessage
};