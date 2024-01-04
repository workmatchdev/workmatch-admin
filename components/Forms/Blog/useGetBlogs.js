import { useState, useEffect } from "react";
import axios from '@/config/clienteAxios';
import useStore from "./store";

const useGetBlogs = () => {

    const { blogList, setBlogList } = useStore();

    const [submitError, setSubmitError] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                setisLoading(true);
                const response = await axios.get('/api/pageBuilder/pages/getAllBlogEntrance');
                const blogs = response.data;
                setBlogList(blogs)
                setisLoading(false)
                setSubmitError(false)
            } catch (error) {
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        getData()
    }, [])

    const deleteBlog = async (id) => {
        try {
            const url = `/api/pageBuilder/pages/deleteBlogEntrance/${id}`;
            await axios.delete(url);
            const filter = blogList.filter(blog => blog._id !== id);
            setBlogList(filter)
            alert('Eliminado correctamente');
        } catch (error) {
            console.log('error', error);
            setSubmitError('Ha ocurrido un error al enviar la información')
        }
    }

    return {
        isLoading,
        blogList,
        submitError,
        deleteBlog
    };
}

export default useGetBlogs;