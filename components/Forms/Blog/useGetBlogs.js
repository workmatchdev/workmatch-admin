import { useState, useEffect } from "react";
import axios from '@/config/clienteAxios';
import useStore from "./store";

const useGetBlogs = (props) => {

    const {id} = props || {};

    const { blogList, setBlogList } = useStore();

    const [submitError, setSubmitError] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                setisLoading(true);
                const url = !id ? '/api/pageBuilder/pages/getAllBlogEntrance' : `/api/pageBuilder/pages/getBlogEntranceById/${id}`;
                const response = await axios.get(url);
                if(id) setSuggestions(response.data.suggestions.filter(suggestion => suggestion._id !== id));
                const blogs = response.data.page;
                setBlogList(blogs)
                setisLoading(false)
                setSubmitError(false)
            } catch (error) {
                setSubmitError('Ha ocurrido un error al obtner la información')
                setisLoading(false);
            }
        }
        getData()
    }, [id])

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
        deleteBlog,
        suggestions
    };
}

export default useGetBlogs;