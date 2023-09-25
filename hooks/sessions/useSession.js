import { useEffect, useMemo } from "react";
import useStoreLogin from "./store/useStoreLogin";
import { useRouter } from 'next/router';

const useSession = () => {

    const {
        user,
        token
    } = useStoreLogin();

    const router = useRouter()

    const islogged = useMemo(() => {
        return user && token ? true : false
    }, [
        user,
        token
    ])

    useEffect(() => {
      if(!islogged) router.push('/');
    }, [islogged]);
    

    return {
        user,
        token,
        islogged
    };
}

export default useSession;