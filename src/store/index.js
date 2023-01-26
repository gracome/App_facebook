import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    active: {},
    chats : [],
    user: [],
    activeUser: {},
    messageListe: [],
    currentUser: null,
    messengeResponse: [],
  messages: [],
  test: []
  },
  getters: {
    active(state){
      return state.active;
    },
    activeUser(state){
      return state.activeUser;
    },
    messages(state) {
      return state.messages;
    },
    chats(state){
      return state.chats;
    },
    allUsers: (state) => state.user,

    messageListe(state){
      return state.messageListe;
    },
    currentUser: (state) => state.currentUser,

    messengeResponse: (state) => state.messengeResponse,
    test: (state) => state.test
  },
  mutations: {
    set_active_chat(state,data){
      state.active= data;
     },
     set_chats(state, data){
      state.chats= data;
     },
     setUsers: (state, users) => (state.user = users),

     set_messageListe(state, data){
      state.messageListe= data;
     },
     setCurrentUser: (state, user) => (state.currentUser = user),
    set_Test: (state, messages) => (state.test = messages),
  
    set_messages(state, messages) {
      state.messages = messages;
    },
    set_activeUser (state, data){
      state.activeUser= data ;
    },
    set_messengerResponse(state, data){
      state.messengeResponse= data;
    }
  },

  actions: {
    
      async fetchUsers({ commit }) {
        const response = await axios.get('http://192.168.1.107:2000/user/all')
        commit('setUsers', response.data.data[0])
      
    },
   
  },
  modules: {
  }
})

