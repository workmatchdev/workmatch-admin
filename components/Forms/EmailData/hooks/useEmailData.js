import { useEffect, useState } from "react";
import axios from "@/config/clienteAxios";

const useEmailData = () => {

    const [initialValues, setInitialValues] = useState({
        host: '',
        port: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await axios.get('/api/configurations/getData/65a52b6f9882bc696c5f2e68');
                setInitialValues(response.data.data.configuration);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log('error', error);
            }
        }

        getData();

    }, [])


    const handleSubmit = async (values) => {
        try {
            const response = await axios.put('/api/configurations/update/65a52b6f9882bc696c5f2e68', values);
            alert(response.data.msg);
        } catch (error) {
            alert('Ha ocurrido un error al actualizar la información');
        }
    }

    return {
        handleSubmit,
        initialValues,
        loading
    };
}

export default useEmailData;