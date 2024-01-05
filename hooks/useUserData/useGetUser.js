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
                const url = `/api/applicants/getApplicant/${userId}`;
                const response = await axios.get(url);
                const data = response.data;
                const { user, ...rest } = data;
                setCurrentUser({ user: user[0], ...rest })
                setisLoading(false)
                setSubmitError(false)
            } catch (error) {
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        if (userId) getData()
    }, [userId])


    const changeUserStatus = async (id) => {
        try {
            const url = `/api/applicants/update/${id}`;
            const response = await axios.put(url,{
                status: !currentUser?.user?.status
            });
            const data = response.data;
            const newObjectUser = {
                ...currentUser,
                user: data.user
            }
            setCurrentUser(newObjectUser);
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    }

    return {
        currentUser,
        setCurrentUser,
        submitError,
        isLoading,
        changeUserStatus
    };
}

export default useGetUser;