import { useEffect, useState } from 'react';
import useStoreMemberships from './store';
import axios from '@/config/clienteAxios';

const useMemberships = () => {
    const [submitError, setSubmitError] = useState(null);

    const {
        memberships,
        error,
        setMemberships,
        addMembership,
        setError,
        updateMembership,
        deleteMembership
    } = useStoreMemberships();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('/api/memberships/');
                const users = response.data;
                setMemberships(users)
            } catch (error) {
                setError('Ha ocurrido un error al obtner los usuarios')
            }
        }
        getUsers()
    }, [])

    const handleSubmit = async (values,type) => {
        try {
            const response = await axios.post('/api/memberships/create',values);
            const user = response.data;
            addMembership(user)
        } catch (error) {
            setSubmitError('Ha ocurrido un error al crear el usuario')
        }
    }

    const handleSubmitUpdate = async (values, id) => {
        try {
            const response = await axios.put(`/api/memberships/update/${id}`, values);
            const user = response.data;
            updateMembership(user)
        } catch (error) {
            setSubmitError('Ha ocurrido un error al actualizar el usuario')
        }
    }

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`/api/memberships/delete/${id}`);
            deleteMembership(id)
        } catch (error) {
            alert('Ha ocurrido un error al eliminar el usuario')
        }
    }


    return {
        memberships,
        error,
        submitError,
        handleSubmit,
        handleSubmitUpdate,
        handleDeleteItem,
    };
}
 
export default useMemberships;