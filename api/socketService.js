import { io } from 'socket.io-client';
import { chatService } from "./messengerServices";
import store from '@/store';

class SocketioService {
  socket;
  constructor() {}
  // Function to connect to the server web socket
  setupSocketConnection() {
    this.socket = io('http://192.168.1.107:8085/');
  }
  // FUnction to emit the connexion event
 
  // Function to disconnect from the server
  disconnect() {
    if (this.socket) {
      // Disconnect the active socket
      this.socket.disconnect();
    }
  }
  // Function to emit disconnection event
 
  // Function to emit a new message
  emitMessage(data) {
        this.socket.emit('SOCKET_MESSAGE', data);
        console.log('ggg');
  }
  // Function to get messages by chat
 message(){
  chatService.Findmessage(this.$store.getters.active.id)
 }
  // Function to get chats by agent
   allChat (){
   chatService.allChat()
}
  // Function to read a chat  messages
  
  // Function to manage emission responses
  subscribe() {
      this.socket.on('SOCKET_MESSAGE_FRONT_RESPONSE', () => {
        this.allChat();
        store.commit('set_Test', 'ggggg')
       
      });
  }
}
export default new SocketioService();