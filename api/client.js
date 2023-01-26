import axios from 'axios';
const Axios = axios.create({
    baseURL: "http://192.168.1.107:2000/"
})

export default Axios;


