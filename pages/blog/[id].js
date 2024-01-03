import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

import Editor from "@/components/Editor";

const Blog = () => {
    return (
        <main>
            <header className="flex flex-row justify-between items-center bg-[#162D4B] p-2 h-[10vh]" >
                <Link className="h-full w-40 bg-white rounded-md" href={'/'}>
                    <img className="object-contain w-full h-full" src="../workMatchLogo.png" />
                </Link>
                <div className="mr-8">
                    <a className="text-white font-semibold mx-2"> <Link href={'/blog'}>Blog</Link> </a>
                    <a className="text-white font-semibold mx-2" href="#support"> Soporte </a>
                </div>
            </header>
            <div className="h-[90vh] bg-slate-700 bg-cover bg-fixed bg-center bg-no-repeat shadow-lg relative"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1497032628192-86f99bcd76bc%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dwork%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8M3x8d29ya3xlbnwwfHx8fDE3MDQxMTA5Nzl8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60')",
                }}
            >
                <div className="absolute bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-center items-center">
                    <div>
                        <h1 className="p-3 text-3xl font-bold text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <h2 className="p-3 text-xl font-bold text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto py-10 px-4">
                <div>
                    <h3 className="text-center font-bold text-2xl mb-4" >Titulo de la entrada de blog</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque auctor elit ut condimentum. Vestibulum quis lorem nec ligula elementum egestas a quis libero. Pellentesque vitae tincidunt augue. Ut a consequat neque. Quisque porta, ipsum sed ornare dignissim, lectus leo scelerisque libero, a ultricies orci ex imperdiet augue. Ut semper pretium dolor, id ultrices erat commodo in. Aliquam et finibus sapien, eu auctor turpis.

                        Curabitur semper orci ac magna iaculis dapibus. Cras a eros ac erat congue tincidunt eget quis nibh. Nulla auctor condimentum metus vitae ullamcorper. Donec ac ornare tortor. Donec in neque vel tellus bibendum sollicitudin. Nam sodales ut justo nec blandit. Integer nec enim risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum commodo diam non turpis accumsan vehicula. Suspendisse vel efficitur odio.

                        Etiam cursus quis nibh id posuere. Curabitur in cursus quam. Phasellus ultrices laoreet dui. Nam imperdiet, ligula venenatis sollicitudin aliquam, sapien odio tincidunt sapien, vitae dictum elit urna sit amet metus. Suspendisse non diam eu nisi sagittis facilisis nec quis massa. Etiam vitae placerat ex. Donec lacinia iaculis metus, tempus sagittis ipsum efficitur vitae. In vitae mi scelerisque, vulputate nulla non, facilisis massa.

                        In in leo et ipsum porta laoreet a vel ligula. Aliquam id fringilla odio, ac convallis lorem. Ut quis dui ante. Phasellus pharetra feugiat efficitur. Mauris ut pulvinar ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque nec tincidunt arcu. Donec a congue felis, vel interdum nulla.

                        Nulla facilisi. Praesent quis condimentum arcu. Aenean luctus enim auctor egestas tincidunt. Donec porta, tellus sed vestibulum volutpat, orci mauris dapibus metus, pretium maximus nunc tellus quis tortor. Pellentesque dignissim, felis ac consectetur varius, turpis est tempor turpis, sit amet pharetra nulla odio id elit. Curabitur id vestibulum lacus, id iaculis nisl. Quisque orci nibh, volutpat ac tincidunt vel, consectetur ac mi. Duis sed sagittis sem, ut dapibus nulla. Sed egestas con
                    </p>
                    <div className="my-6">
                        <p className="text-center font-bold text-2xl mb-6">Sugerencias</p>
                        <div>
                            <div className="flex justify-between md:flex-row flex-col items-start bg-gray-100 py-4 mb-4">
                                <div className="h-[15rem] w-full rounded-lg">
                                    <img className="object-contain w-full h-full" src="https://wallpapers.com/images/featured/business-jzw8ax93flqonkce.jpg" />
                                </div>
                                <div className="px-6 my-4">
                                    <p className="font-bold md:text-left text-center text-xl">Title blog</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet neque egestas, cursus sem sit amet, mattis augue. Pellentesque non nisi ornare, semper neque ullamcorper, blandit turpis. Sed nec orci in mauris cursus egestas sit amet nec ipsum. Aliquam quis lacus turpis.
                                    </p>
                                    <Link href={'/blog/dlfdlfk'}>
                                        <p className="p-2 bg-[#162D4B] md:w-[15rem] w-full text-center mt-2 text-white rounded-md" >Ver mas</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex md:flex-row flex-col md:justify-between justify-center bg-[#162D4B] items-center p-10">
                <div className="h-full w-40 mb-10 bg-white rounded-sm">
                    <img className="object-contain w-full h-full" src="../workMatchLogo.png" />
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