import { useState, useEffect } from 'react';
import axios from '@/config/clienteAxios';
import useStoreLogin from "@/hooks/useLogin/store";
import { useRouter } from 'next/router';

const useLogin = () => {

  const router = useRouter()
  const [error, setError] = useState(null);

  const {
    user,
    setUser,
    token,
    setToken,
  } = useStoreLogin();

  useEffect(() => {
    if(user && token) router.push('users');
  }, [user,token])

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('/api/auth/', values);
      const sessionData = response.data;
      setUser(sessionData.usuario);
      setToken(sessionData.token);
    } catch (error) {
      setError(error?.response?.data?.msg)
    }
  };

  const handleLogout = async () => {
    try {
      setUser(null);
      setToken(null);
    } catch (error) {
      setError(error)
    }
  };

  return {
    token,
    user,
    error,
    handleLogin,
    handleLogout
  };
}

export default useLogin;