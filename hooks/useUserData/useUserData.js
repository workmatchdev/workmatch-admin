import { useEffect } from 'react';
import axios from '@/config/clienteAxios';
import useStoreUser from './store/useStoreUser';

const useUserData = () => {

    const {
        applicants,
        setApplicants,
        setError,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage
    } = useStoreUser();

    const getUsers = async (currentPage) => {
        try {
            const response = await axios.get(`/api/applicants/${currentPage}/applicant`);
            const users = response.data;
            setTotalPages(users.total)
            setApplicants(users.users)
        } catch (error) {
            setError('Ha ocurrido un error al obtner los usuarios')
        }
    }
    useEffect(() => {
        getUsers(currentPage)
    }, [currentPage])


    const handlePageClick = (event) => {
        const newOffset = (event.selected * 1) % totalPages;
        setCurrentPage(newOffset + 1)
        // setItemOffset(newOffset);
    };

    return {
        currentPage,
        applicants,
        totalPages,
        handlePageClick
    };
}

export default useUserData;