import { useEffect, useState } from 'react';
import useStoreUsers from './store';
import axios from '@/config/clienteAxios';

const useUsers = () => {
    const [submitError, setSubmitError] = useState(null);

    const {
        users,
        error,
        setUsers,
        addUser,
        setError,
        updateUser,
        deleteUser
    } = useStoreUsers();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('/api/admins/');
                const users = response.data;
                setUsers(users)
            } catch (error) {
                setError('Ha ocurrido un error al obtner los usuarios')
            }
        }
        getUsers()
    }, [])

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('/api/admins/create', values);
            const user = response.data;
            addUser(user)
        } catch (error) {
            setSubmitError('Ha ocurrido un error al crear el usuario')
        }
    }

    const handleSubmitUpdate = async (values, id) => {
        try {
            const response = await axios.put(`/api/admins/update/${id}`, values);
            const user = response.data;
            updateUser(user)
        } catch (error) {
            setSubmitError('Ha ocurrido un error al actualizar el usuario')
        }
    }

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`/api/admins/delete/${id}`);
            deleteUser(id)
        } catch (error) {
            alert('Ha ocurrido un error al eliminar el usuario')
        }
    }


    return {
        users,
        error,
        submitError,
        handleSubmit,
        handleSubmitUpdate,
        handleDeleteItem,
    };
}
 
export default useUsers;