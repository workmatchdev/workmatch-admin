import { useEffect, useState } from 'react';

import axios from '@/config/clienteAxios';


const useUpdateLandingPage = ({
    setShowModal,
    isLanding
}) => {

    const [initialValues, setInitialValues] = useState({
        title1: '',
        title2: '',
        background1: null,
        card1: '',
        backgroundCard1: null,
        descriptionCard1: '',
        card2: '',
        backgroundCard2: null,
        descriptionCard2: '',
        card3: '',
        backgroundCard3: null,
        descriptionCard3: '',
        bannerTitle: '',
        backgroundBanner: null,
        descriptionBanner: '',
        facebook: '',
        youtube: '',
        linkedin: '',
        email: ''
    });

    const [submitError, setSubmitError] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const getRoles = async () => {
            try {
                setisLoading(true);
                const response = await axios.get('/api/pageBuilder/pages/65953ecc0969c10351a6e7ea');
                const initVal = response.data.page;
                if (!isLanding) {
                    delete initVal.background1;
                    delete initVal.backgroundCard1;
                    delete initVal.backgroundCard2;
                    delete initVal.backgroundCard3;
                    delete initVal.backgroundBanner;
                }
                setInitialValues(initVal)
                setSubmitError(null)
                setisLoading(false)
            } catch (error) {
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        getRoles()
    }, [isLanding])

    const handleSubmit = async (values) => {
        try {
            const response = await axios.put('/api/pageBuilder/pages/updateLandingPage/65953ecc0969c10351a6e7ea', values);
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