import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:process.env.NEXT_PUBLIC_NEXTAUTH_URL
});

export default clienteAxios;