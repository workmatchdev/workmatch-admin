// import React from 'react'
import axios from "@/config/clienteAxios";

const useGetSupport = () => {

    const handleCreateSupport = async (values) => {
        try {
            const url = `/api/support/create`;
            await axios.post(url, values);
            alert('Reporte realizado correctamente')
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    }

    const handleDeleteSupport = async (id, callback) => {
        try {
            const url = `/api/support/delete/${id}`;
            await axios.delete(url);
            if (callback) callback(id)
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    }

    const handleUpdateSupport = async (id, callback) => {
        try {
            const url = `/api/support/update/${id}`;
            const response = await axios.put(url,{
                status: 'revisado'
            });
            if (callback) callback(id, response.data.support)
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    }

    return {
        handleCreateSupport,
        handleDeleteSupport,
        handleUpdateSupport
    };
}

export default useGetSupport;