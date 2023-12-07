import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <main>
      <header className="flex flex-row justify-between items-center bg-blue-950 p-2 h-[10vh]" >
        <div className="h-full w-40">
          <img className="object-contain w-full h-full" src="https://i.pinimg.com/736x/a6/ba/5c/a6ba5c337c722a608f94dec7323a378f.jpg" />
        </div>
        <div className="mr-8">
          <a className="text-white font-semibold mx-2"> <Link href={'/blog'}>Blog</Link> </a>
          <a className="text-white font-semibold mx-2"> <Link href={'/soporte'}>Soporte</Link> </a>
        </div>
      </header>
      <div className="h-[90vh] bg-gray-200">
        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto py-10 px-4">

        <div className="flex flex-col md:flex-row items-stretch">
          <div className="flex-1 bg-gray-100 p-4 mx-2 rounded-md mb-4">
            <div className="h-[15rem] w-full">
              <img className="object-contain w-full h-full" src="https://i.pinimg.com/236x/da/83/2b/da832b628cd71477902a4a9fcc3e3fbc.jpg" />
            </div>
            <div className="p-2">
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus volutpat mauris vitae vehicula. Duis eu magna a est molestie auctor. Maecenas non euismod massa. Maecenas sed sem faucibus, rhoncus nisl quis, imperdiet felis. Morbi volutpat interdum lectus, vel luctus dui laoreet ac. Proin luctus justo purus, id pretium purus tincidunt eget. Ut eu sem leo. Suspendisse quis mauris vitae velit tristique porta. Vestibulum vitae odio dictum, dictum erat vel, sodales dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 mx-2 rounded-md mb-4">
            <div className="h-[15rem] w-full">
              <img className="object-contain w-full h-full" src="https://i.pinimg.com/736x/a6/ba/5c/a6ba5c337c722a608f94dec7323a378f.jpg" />
            </div>
            <div className="p-2">
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus volutpat mauris vitae vehicula. Duis eu magna a est molestie auctor. Maecenas non euismod massa. Maecenas sed sem faucibus, rhoncus nisl quis, imperdiet felis. Morbi volutpat interdum lectus, vel luctus dui laoreet ac. Proin luctus justo purus, id pretium purus tincidunt eget. Ut eu sem leo. Suspendisse quis mauris vitae velit tristique porta. Vestibulum vitae odio dictum, dictum erat vel, sodales dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 mx-2 rounded-md mb-4">
            <div className="h-[15rem] w-full">
              <img className="object-contain w-full h-full" src="https://images6.alphacoders.com/133/1331472.png" />
            </div>
            <div className="p-2">
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus volutpat mauris vitae vehicula. Duis eu magna a est molestie auctor. Maecenas non euismod massa. Maecenas sed sem faucibus, rhoncus nisl quis, imperdiet felis. Morbi volutpat interdum lectus, vel luctus dui laoreet ac. Proin luctus justo purus, id pretium purus tincidunt eget. Ut eu sem leo. Suspendisse quis mauris vitae velit tristique porta. Vestibulum vitae odio dictum, dictum erat vel, sodales dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-100 p-4 rounded-md">
          <p className="text-center text-2xl my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* imagen */}
          <div className="max-w-[50%] mx-auto my-2 rounded-md bg-slate-600 overflow-hidden">
            <img className="h-full w-full object-contain" src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/Zoro-es-uno-con-La-Fuerza-en-este-fanart-de-One-Piece-x-Star-Wars.jpg" />
          </div>
          <p className="text-center text-lg my-4 max-w-[70%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus volutpat mauris vitae vehicula. Duis eu magna a est molestie auctor. Maecenas non euismod massa. Maecenas sed sem faucibus, rhoncus nisl quis, imperdiet felis. Morbi volutpat interdum lectus, vel luctus dui laoreet ac. Proin
          </p>
        </div>

        <div className="w-full mt-8">
          <form className="w-full mx-auto bg-gray-100 p-4 rounded-md">
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
      <footer className="flex md:flex-row flex-col md:justify-between justify-center bg-blue-900 items-center p-10">
        <div className="h-full w-40 mb-10">
          <img className="object-contain w-full h-full" src="https://i.pinimg.com/736x/a6/ba/5c/a6ba5c337c722a608f94dec7323a378f.jpg" />
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
  )
}
