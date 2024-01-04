import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import useUpdateLandingPage from "@/components/Forms/UpdateLandingPage/hooks/useUpdateLandingPage";

export default function Home() {

  const {
    initialValues,
    isLoading
  } = useUpdateLandingPage({ setShowModal: () => { }, isLanding: true })

  const {
    title1,
    title2,
    card1,
    descriptionCard1,
    card2,
    descriptionCard2,
    card3,
    descriptionCard3,
    bannerTitle,
    descriptionBanner,
    email,
    facebook,
    linkedin,
    youtube,
    background1,
    backgroundCard1,
    backgroundCard2,
    backgroundCard3,
    backgroundBanner
  } = initialValues || {};

  return (
    <main className="relative">
      {isLoading && (
        <div role="status" class="flex flex-col justify-center items-center fixed z-10 bg-gray-200 w-full h-full">
          <svg aria-hidden="true" class="w-20 h-20 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
          <span class="">Loading...</span>
        </div>
      )}
      <header className="flex flex-row justify-between items-center bg-[#162D4B] p-2 h-[10vh]" >
        <Link className="h-full w-40 bg-white rounded-md" href={'/'}>
          <img className="object-contain w-full h-full" src="./workMatchLogo.png" />
        </Link>
        <div className="mr-8">
          <Link className="text-white font-semibold mx-2" href={'/blog'}>Blog</Link>
          <Link className="text-white font-semibold mx-2" href="#support"> Soporte </Link>
        </div>
      </header>
      <div className="h-[90vh] bg-slate-700 bg-cover bg-fixed bg-center bg-no-repeat shadow-lg relative"
        style={{
          backgroundImage: `url('${background1?.url}')`,
        }}
      >
        <div className="absolute bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-center items-center">
          <div>
            <h1 className="p-3 text-3xl font-bold text-white text-center">{title1}</h1>
            <h2 className="p-3 text-xl font-bold text-white text-center">{title2}</h2>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto py-10 px-4">

        <div className="flex flex-col md:flex-row items-stretch">
          <div className="flex-1 bg-gray-100 p-4 mx-2 rounded-md mb-4">
            <p className="text-center py-2 font-bold text-xl rounded-sm mb-3" >{card1}</p>
            <div className="h-[15rem] w-full">
              <img className="object-contain w-full h-full" src={backgroundCard1?.url} alt='image' />
            </div>
            <div className="p-2">
              <p className="text-justify">{descriptionCard1}</p>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 mx-2 rounded-md mb-4">
            <p className="text-center py-2 font-bold text-xl rounded-sm mb-3" >{card2}</p>
            <div className="h-[15rem] w-full">
              <img className="object-contain w-full h-full" src={backgroundCard2?.url} alt='image' />
            </div>
            <div className="p-2">
              <p className="text-justify">{descriptionCard2}</p>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 mx-2 rounded-md mb-4">
            <p className="text-center py-2 font-bold text-xl rounded-sm mb-3" >{card3}</p>
            <div className="h-[15rem] w-full">
              <img className="object-contain w-full h-full" src={backgroundCard3?.url} alt='image' />
            </div>
            <div className="p-2">
              <p className="text-justify">{descriptionCard3}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-100 p-4 rounded-md">
          <p className="text-center text-2xl my-4">{bannerTitle}</p>
          {/* imagen */}
          <div className="max-w-[50%] mx-auto my-2 rounded-md overflow-hidden">
            <img className="h-full w-full object-contain" src={backgroundBanner?.url} alt='image' />
          </div>
          <p className="text-center text-lg my-4 max-w-[70%] mx-auto">{descriptionBanner}</p>
        </div>

        <div id="support" className="w-full mt-8">
          <form className="w-full mx-auto bg-gray-100 p-4 rounded-md">
            <p className="p-4 text-center font-bold text-2xl">Soporte</p>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold">Email:</label>
              <input className="p-2 rounded-sm outline-none" placeholder="joe@Doe.com" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold">Archivo:</label>
              <input type="file" className="p-2 rounded-sm outline-none" placeholder="joe@Doe.com" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold">Mensaje:</label>
              <textarea className="p-2 rounded-sm outline-none" placeholder="joe@Doe.com" />
            </div>
            <button className="p-2 bg-pink-600 rounded-sm font-semibold w-full text-white" >Enviar</button>
          </form>
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
  )
}
