import axios from 'axios';

const clienteAxios = axios.create({
    // baseURL:'https://proscore-server.herokuapp.com'
    baseURL:'http://localhost:4000'
    // baseURL:'https://prueba-proscore.herokuapp.com'
});

export default clienteAxios;