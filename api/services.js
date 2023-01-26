import Axios from './client';
let login = (credentials) => {
    return Axios.post('/user/login', credentials);
}
let register = (user) => {
    return Axios.post('/user/add', user);
}
let delete_user = (user) => {
    return Axios.delete('/user/delete', user);
}
let update = (user) => {
    return Axios.put('/user/update', user);
}
let profil = (user) => {
    return Axios.post('/user/me', user);
}

let userDetail = (id) => {
    return Axios.get('user/find', id);
}
let changePassword = (user) => {
    return Axios.put('/user/change_password', user);
}
let logout = () => {
    localStorage.removeItem('token');
    
}
let user_list= (user) =>{
    return Axios.get('/user/all', user);
}
let saveToken = (token, id) => {
     localStorage.setItem('token', token);
     localStorage.setItem('id', id);

}
let isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token;
}

export const accountService = {
    login,
    register,
    profil,
    user_list,
    changePassword,
    logout,
    saveToken,
    delete_user ,
    update,
    isLogged,
    userDetail
};