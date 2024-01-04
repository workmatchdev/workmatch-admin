import { useState, useEffect } from "react";
import axios from '@/config/clienteAxios';
import useStore from "./store";


const useBlogEntrance = ({ setShowModal, id }) => {

    const { blogList, setBlogList } = useStore();
    
    const [initialValues, setInitialValues] = useState({
        title: '',
        url: '',
        image: null,
        shortDescription: '',
        longDescription: '',
    })
    const [submitError, setSubmitError] = useState(null);
    const [isLoading, setisLoading] = useState(false)

    console.log('initialValues', initialValues);

    useEffect(() => {
        const getData = async () => {
            try {
                setisLoading(true);
                const response = await axios.get(`/api/pageBuilder/pages/getBlogEntranceById/${id}`);
                const blogs = { ...response.data.page };
                delete blogs.image;
                setInitialValues(blogs)
                setisLoading(false)
            } catch (error) {
                console.log('error', error);
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        if (id) getData()
    }, [id])

    const handleSubmit = async (values) => {
        try {
            const url = !id ? '/api/pageBuilder/pages/createBlogEntrance' : `/api/pageBuilder/pages/updateBlogEntrance/${id}`;
            const axiosMethod = !id ? axios.post : axios.put;
            const response = await axiosMethod(url, values);
            const newValues = response.data;
            if(!id) {
                setBlogList([...blogList, newValues])
            }else{
                const replaceBlog = blogList.map(blog => {
                    if(blog._id === newValues._id){
                        return newValues
                    }
                    return blog
                })
                setBlogList(replaceBlog);
            }
            setInitialValues(newValues)
            setShowModal(false)
            alert('informacion guardada')
        } catch (error) {
            setSubmitError('Ha ocurrido un error al enviar la información')
        }
    }


    return {
        initialValues,
        handleSubmit,
        submitError,
        isLoading
    };
}

export default useBlogEntrance;