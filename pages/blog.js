import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';


const Blog = () => {
    return (
        <main>
            <header className="flex flex-row justify-between items-center bg-[#162D4B] p-2 h-[10vh]" >
                <Link className="h-full w-40 bg-white rounded-md" href={'/'}>
                    <img className="object-contain w-full h-full" src="./workMatchLogo.png" />
                </Link>
                <div className="mr-8">
                    <a className="text-white font-semibold mx-2"> <Link href={'/blog'}>Blog</Link> </a>
                    <a className="text-white font-semibold mx-2" href="#support"> Soporte </a>
                </div>
            </header>
            <div className="h-[90vh] bg-slate-700 bg-cover bg-fixed bg-center bg-no-repeat shadow-lg relative"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
                }}
            >
                <div className="absolute bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-center items-center">
                    <div>
                        <h1 className="p-3 text-3xl font-bold text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <h2 className="p-3 text-xl font-bold text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto py-10 px-4">
                <div>
                    <div className="flex justify-between flex-row items-start bg-gray-100 py-4 mb-4">
                        <div className="h-[15rem] w-full rounded-lg">
                            <img className="object-contain w-full h-full" src="https://wallpapers.com/images/featured/business-jzw8ax93flqonkce.jpg" />
                        </div>
                        <div className="px-6">
                            <p className="font-bold text-xl">Title blog</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet neque egestas, cursus sem sit amet, mattis augue. Pellentesque non nisi ornare, semper neque ullamcorper, blandit turpis. Sed nec orci in mauris cursus egestas sit amet nec ipsum. Aliquam quis lacus turpis.
                            </p>
                            <Link href={'/blog/dlfdlfk'}>
                                <p className="p-2 bg-[#162D4B] w-[15rem] text-center mt-2 text-white rounded-md" >Ver mas</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-between flex-row items-start bg-gray-100 py-4 mb-4">
                        <div className="h-[15rem] w-full rounded-lg">
                            <img className="object-contain w-full h-full" src="https://wallpapers.com/images/featured/business-jzw8ax93flqonkce.jpg" />
                        </div>
                        <div className="px-6">
                            <p className="font-bold text-xl">Title blog</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet neque egestas, cursus sem sit amet, mattis augue. Pellentesque non nisi ornare, semper neque ullamcorper, blandit turpis. Sed nec orci in mauris cursus egestas sit amet nec ipsum. Aliquam quis lacus turpis.
                            </p>
                            <Link href={'/blog/dlfdlfk'}>
                                <p className="p-2 bg-[#162D4B] w-[15rem] text-center mt-2 text-white rounded-md" >Ver mas</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-between flex-row items-start bg-gray-100 py-4 mb-4">
                        <div className="h-[15rem] w-full rounded-lg">
                            <img className="object-contain w-full h-full" src="https://wallpapers.com/images/featured/business-jzw8ax93flqonkce.jpg" />
                        </div>
                        <div className="px-6">
                            <p className="font-bold text-xl">Title blog</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet neque egestas, cursus sem sit amet, mattis augue. Pellentesque non nisi ornare, semper neque ullamcorper, blandit turpis. Sed nec orci in mauris cursus egestas sit amet nec ipsum. Aliquam quis lacus turpis.
                            </p>
                            <Link href={'/blog/dlfdlfk'}>
                                <p className="p-2 bg-[#162D4B] w-[15rem] text-center mt-2 text-white rounded-md" >Ver mas</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex md:flex-row flex-col md:justify-between justify-center bg-[#162D4B] items-center p-10">
                <div className="h-full w-40 mb-10 bg-white rounded-sm">
                    <img className="object-contain w-full h-full" src="./workMatchLogo.png" />
                </div>
                <div className="grid grid-flow-col grid-rows-2 mb-10">
                    <a className="text-white font-semibold mx-2"> <Link href={'/'}> <FacebookIcon fontSize="large" /> </Link> </a>
                    <a className="text-white font-semibold mx-2"> <Link href={'/'}> <LinkedInIcon fontSize="large" /> </Link> </a>
                    <a className="text-white font-semibold mx-2"> <Link href={'/'}> <YouTubeIcon fontSize="large" /> </Link> </a>
                    <a className="text-white font-semibold mx-2"> <Link href={'/'}> <EmailIcon fontSize="large" /> </Link> </a>
                </div>
                <div className="flex flex-col mr-8">
                    <a className="text-white font-semibold mx-2 text-center"> <Link href={'/blog'}>Terminos y condiciones</Link> </a>
                    <a className="text-white font-semibold mx-2 text-center"> <Link href={'/soporte'}>Politica de privacidad</Link> </a>
                </div>
            </footer>
        </main>
    );
}

export default Blog;