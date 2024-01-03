import { useEffect, useState } from 'react';

import axios from '@/config/clienteAxios';


const useUpdateLandingPage = ({
    setShowModal
}) => {

    const [initialValues, setInitialValues] = useState({
        politicaDePrivacidad: ''
    });

    const [submitError, setSubmitError] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const getRoles = async () => {
            try {
                setisLoading(true);
                const response = await axios.get('/api/pageBuilder/pages/65953ecc0969c10351a6e7ea');
                const initVal = response.data.page;
                setInitialValues({politicaDePrivacidad: initVal?.politicaDePrivacidad})
                setSubmitError(null)
                setisLoading(false)
            } catch (error) {
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        getRoles()
    }, [])

    const handleSubmit = async (values) => {
        try {
            const response = await axios.put('/api/pageBuilder/pages/updatePagePolicy/65953ecc0969c10351a6e7ea', values);
            const newValues = response.data;
            setInitialValues(newValues)
            setShowModal(false)
            alert('informacion guardada')
        } catch (error) {
            setSubmitError('Ha ocurrido un error al enviar la información')
        }
    }

    return {
        handleSubmit,
        initialValues,
        submitError,
        isLoading
    };
}

export default useUpdateLandingPage;