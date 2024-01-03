import Link from "next/link";
import useUpdateTerms from "@/components/Forms/UpdateTerms/hooks/useUpdateTerms";
import useUpdateLandingPage from "@/components/Forms/UpdateLandingPage/hooks/useUpdateLandingPage";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const TermsAndConditions = () => {

    const { initialValues: {
        facebook,
        linkedin,
        youtube,
        email
    },
        isLoading
    } = useUpdateLandingPage({ setShowModal: () => { } });

    const { initialValues } = useUpdateTerms({ setShowModal: () => { } });
    const { terminosYcondiciones } = initialValues || {};

    return (
        <div>
            <header className="flex flex-row justify-between items-center bg-[#162D4B] p-2 h-[10vh]" >
                <Link className="h-full w-40 bg-white rounded-md" href={'/'}>
                    <img className="object-contain w-full h-full" src="./workMatchLogo.png" />
                </Link>
                <div className="mr-8">
                    <Link className="text-white font-semibold mx-2" href={'/blog'}>Blog</Link>
                    <Link className="text-white font-semibold mx-2" href="#support"> Soporte </Link>
                </div>
            </header>
            <div className="p-6 max-w-[1400px] mx-auto">
                <div dangerouslySetInnerHTML={{ __html: terminosYcondiciones }} />;
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
        </div>
    );
}

export default TermsAndConditions;