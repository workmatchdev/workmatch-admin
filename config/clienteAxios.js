import axios from 'axios';

const clienteAxios = axios.create({
    // baseURL:'https://proscore-server.herokuapp.com'
    baseURL:process.env.NEXT_PUBLIC_NEXTAUTH_URL
    // baseURL:'https://prueba-proscore.herokuapp.com'
});

export default clienteAxios;