import { useEffect, useState } from 'react';
import useStoreRoles from './store';
import axios from '@/config/clienteAxios';

const useRoles = () => {
    const [submitError, setSubmitError] = useState(null);
    const {
        roles,
        error,
        setRoles,
        addRol,
        setError,
        updateRol,
        deleteRol
    } = useStoreRoles();

    useEffect(() => {
        const getRoles = async () => {
            try {
                const response = await axios.get('/api/roles/');
                const roles = response.data;
                setRoles(roles)
            } catch (error) {
                setError('Ha ocurrido un error al obtner los roles')
            }
        }
        getRoles()
    }, [])

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('/api/roles/create', values);
            const rol = response.data;
            addRol(rol)
        } catch (error) {
            setSubmitError('Ha ocurrido un error al crear el rol')
        }
    }

    const handleSubmitUpdate = async (values, id) => {
        try {
            const response = await axios.put(`/api/roles/update/${id}`, values);
            const rol = response.data;
            updateRol(rol)
        } catch (error) {
            setSubmitError('Ha ocurrido un error al actualizar el rol')
        }
    }

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`/api/roles/delete/${id}`);
            deleteRol(id)
        } catch (error) {
            alert('Ha ocurrido un error al eliminar el rol')
        }
    }


    return {
        roles,
        error,
        submitError,
        handleSubmit,
        handleSubmitUpdate,
        handleDeleteItem,
    };
}

export default useRoles;