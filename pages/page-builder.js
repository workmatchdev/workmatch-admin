import Layout from "@/components/Layout";
import useSession from "@/hooks/sessions/useSession";
import Modal from "@/components/Modal";
import UpdateLandingPage from "@/components/Forms/UpdateLandingPage";
import Editor from "@/components/Editor";
import BlogEntrance from "@/components/Forms/Blog/blogEntrance";
import UpdateTerms from "@/components/Forms/UpdateTerms";
import UpdatePolicy from "@/components/Forms/UpdatePolicy";

const PageBuilder = () => {
    const { user } = useSession();
    return (
        <Layout>
            <div>
                <div>
                    <Modal title='Crear entrada de blog' buttonStyle={`
                    bg-[#162D4B] text-white active:bg-[#162D4B] font-bold uppercase text-sm
                    px-6 py-3 rounded shadow hover:shadow-lg outline-none
                    focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                    `}>
                        <BlogEntrance />
                    </Modal>
                </div>
                <h1 className="text-center font-bold text-2xl">Page builder</h1>
                <div className="w-full mt-4">
                    <div className="flex flex-row items-center justify-between py-2 px-4 w-full bg-[#162D4B]" >
                        <p className="text-white font-bold" >Nombre</p>
                        {/* <p className="text-white font-bold" >Ultima Actualización</p> */}
                        <p className="text-white font-bold" >Acciones</p>
                    </div>
                    <div className="flex flex-row items-center justify-between p-4 w-full bg-gray-100" >
                        <p>Landing Page</p>
                        {/* <p>02/01/2024</p> */}
                        <Modal title='Editar' buttonStyle={`bg-[#162D4B] p-2 text-white rounded-sm`}>
                            <UpdateLandingPage />
                        </Modal>
                    </div>
                    <div className="flex flex-row items-center justify-between p-4 w-full bg-gray-100">
                        <p>Terminos y condiciones</p>
                        {/* <p>02/01/2024</p> */}
                        <Modal title='Editar' buttonStyle={`bg-[#162D4B] p-2 text-white rounded-sm`}>
                           <UpdateTerms />
                        </Modal>
                    </div>
                    <div className="flex flex-row items-center justify-between p-4 w-full bg-gray-100">
                        <p>Politica de privacidad</p>
                        {/* <p>02/01/2024</p> */}
                        <Modal title='Editar' buttonStyle={`bg-[#162D4B] p-2 text-white rounded-sm`}>
                            <UpdatePolicy />
                        </Modal>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-center font-bold text-2xl mb-4">Entradas de blog</p>
                    <div className="flex flex-row items-center justify-between py-2 px-4 w-full bg-[#162D4B]" >
                        <p className="text-white font-bold" >Nombre</p>
                        {/* <p className="text-white font-bold" >Ultima Actualización</p> */}
                        <p className="text-white font-bold" >Acciones</p>
                    </div>
                    <div className="flex flex-row items-center justify-between p-4 w-full bg-gray-100">
                        <p>Landing Page</p>
                        {/* <p>02/01/2024</p> */}
                        <Modal title='Editar' buttonStyle={`bg-[#162D4B] p-2 text-white rounded-sm`}>
                            <p>Hola</p>
                        </Modal>
                    </div>
                    <div className="flex flex-row items-center justify-between p-4 w-full bg-gray-100">
                        <p>Landing Page</p>
                        {/* <p>02/01/2024</p> */}
                        <Modal title='Editar' buttonStyle={`bg-[#162D4B] p-2 text-white rounded-sm`}>
                            <p>Hola</p>
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PageBuilder;