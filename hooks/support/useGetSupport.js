import { useEffect, useState } from "react";
import axios from "@/config/clienteAxios";

const useGetSupport = () => {

    const [listOffSupports, setlistOffSupports] = useState([])
    const [submitError, setSubmitError] = useState(null);
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setisLoading(true);
                const url = `/api/support`;
                const response = await axios.get(url);
                const data = response.data.supports;
                setlistOffSupports(data)
                setisLoading(false)
                setSubmitError(false)
            } catch (error) {
                console.log('error',error);
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        getData()
    }, [])


    return {
        isLoading,
        submitError,
        listOffSupports,
        setlistOffSupports
    };
}

export default useGetSupport;