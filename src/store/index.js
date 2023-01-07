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
  messages: [],
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
    
  
    set_messages(state, messages) {
      state.messages = messages;
    },
    set_activeUser (state, data){
      state.activeUser= data ;
    }
  
  },

  actions: {
    
      async fetchUsers({ commit }) {
        const response = await axios.get('http://192.168.1.104:2000/user/all')
        commit('setUsers', response.data.data[0])
      
    },
   
  },
  modules: {
  }
})

