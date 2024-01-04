import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import useGetBlogs from "@/components/Forms/Blog/useGetBlogs";
import useUpdateLandingPage from "@/components/Forms/UpdateLandingPage/hooks/useUpdateLandingPage";


const Blog = () => {

    const { blogList } = useGetBlogs();

    const {
        initialValues,
        isLoading
    } = useUpdateLandingPage({ setShowModal: () => { }, isLanding: true })

    const {
        email,
        facebook,
        linkedin,
        youtube
    } = initialValues || {};



    return (
        <main>
            {isLoading && (
                <div role="status" class="flex flex-col justify-center items-center fixed z-10 bg-gray-200 w-full h-full">
                    <svg aria-hidden="true" class="w-20 h-20 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                    <span class="">Loading...</span>
                </div>
            )}
            <header className="flex flex-row justify-between items-center bg-[#162D4B] p-2 h-[10vh]" >
                <Link className="h-full w-40 bg-white rounded-md" href={'/'}>
                    <img className="object-contain w-full h-full" src="../workMatchLogo.png" />
                </Link>
                <div className="mr-8">
                    <Link className="text-white font-semibold mx-2" href={'/blog'}>Blog</Link>
                </div>
            </header>
            <div className="h-[90vh] bg-slate-700 bg-cover bg-fixed bg-center bg-no-repeat shadow-lg relative"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
                }}
            >
                <div className="absolute bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-center items-center">
                    <div>
                        <h1 className="p-3 text-3xl font-bold text-white text-center">Blog</h1>
                        <h2 className="p-3 text-xl font-bold text-white text-center"></h2>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto py-10 px-4">
                <div>
                    {blogList.map(blog => {
                        return (
                            <div key={blog._id} className="flex justify-between flex-row items-start bg-gray-100 py-4 mb-4">
                                <div className="h-[15rem] w-1/3 rounded-lg">
                                    <img className="object-contain w-full h-full" src="https://wallpapers.com/images/featured/business-jzw8ax93flqonkce.jpg" />
                                </div>
                                <div className="px-6 w-2/3">
                                    <p className="font-bold text-xl">{blog.title}</p>
                                    <p>{blog.shortDescription}</p>
                                    <Link href={`/blog/${blog._id}`}>
                                        <p className="p-2 bg-[#162D4B] w-[15rem] text-center mt-2 text-white rounded-md" >Ver mas</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {!isLoading && (
                <footer className="flex md:flex-row flex-col md:justify-between justify-center bg-[#162D4B] items-center p-10">
                    <div className="h-full w-40 mb-10 bg-white rounded-sm">
                        <img className="object-contain w-full h-full" src="./workMatchLogo.png" />
                    </div>
                    <div className="grid grid-flow-col grid-rows-2 mb-10">
                        <Link className="text-white font-semibold mx-2" href={linkedin}> <LinkedInIcon fontSize="large" /> </Link>
                        <Link className="text-white font-semibold mx-2" href={facebook}> <FacebookIcon fontSize="large" /> </Link>
                        <Link className="text-white font-semibold mx-2" href={youtube}> <YouTubeIcon fontSize="large" /> </Link>
                        <a className="text-white font-semibold mx-2" href={`mailto:${email}`}><EmailIcon fontSize="large" /></a>
                    </div>
                    <div className="flex flex-col mr-8">
                        <Link className="text-white font-semibold mx-2 text-center" href={'/terminos-y-condiciones'}>Terminos y condiciones</Link>
                        <Link className="text-white font-semibold mx-2 text-center" href={'/politica-de-privacidad'}>Politica de privacidad</Link>
                    </div>
                </footer>
            )}
        </main>
    );
}

export default Blog;