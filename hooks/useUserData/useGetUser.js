import { useMemo, useEffect, useState } from 'react';
import useStore from './store/useStoreUser';
import { usePathname } from 'next/navigation'
import axios from '@/config/clienteAxios';

const useGetUser = () => {
    const pathname = usePathname();
    const { currentUser, setCurrentUser } = useStore();
    const userId = useMemo(() => {
        if (!pathname) return '';
        return pathname?.split('/').pop();
    }, [pathname])
    const [submitError, setSubmitError] = useState(null);
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        const getData = async () => {
            try {
                setisLoading(true);
                console.log('userId',userId);
                const url = `/api/applicants/getApplicant/${userId}`;
                const response = await axios.get(url);
                const data = response.data;
                const { user, ...rest } = data;
                setCurrentUser({ user: user[0], ...rest })
                setisLoading(false)
                setSubmitError(false)
            } catch (error) {
                console.log(error);
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        if (userId) getData()
    }, [userId])

    return {
        currentUser,
        setCurrentUser,
        submitError,
        isLoading
    };
}

export default useGetUser;