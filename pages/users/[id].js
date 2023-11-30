import Layout from "@/components/Layout";
import useSession from "@/hooks/sessions/useSession";

const User = () => {
    const { user } = useSession();
    return (
        <Layout>
            <div className="flex justify-between flex-row">
                <div className="w-1/5 mr-4 bg-gray-100 h-[800px] p-4">
                    <div class="w-full h-40">
                        <img class="object-contain h-full w-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
                    </div>
                    <div className="mt-4">
                        <p className="py-1 font-light"> <span className="font-semibold" >Nombre:</span> Cosme Fulanito</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Email:</span> test@test.com</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Telefono:</span> 5542179236</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Membresia:</span> Plan aspirante</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Vigencia:</span> 22/10/2022</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Ultima Sesion:</span> 22/09/2023</p>
                    </div>
                    <div className="flex flex-row mt-4">
                        <p className="mr-2 font-semibold">Cuenta bloqueada:</p>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" checked={true} />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
                <div className="w-4/5 p-4 bg-gray-100">
                    <div className="">
                        <button className="bg-gray-300 p-4 rounded-t-lg">Pagos y membresias</button>
                        <button className="bg-gray-200 p-4 rounded-t-lg">Postulaciones</button>
                        {/* <button className="bg-gray-200 p-4 rounded-t-lg">Trabajos</button> */}
                    </div>
                    <div className="bg-gray-300 p-4 w-full">
                        <div className="flex flex-row justify-start flex-wrap">
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Plan aspirante basico</p>
                                <p>22/08/2023</p>
                                <p>$150.00</p>
                                <p>Tarjeta: ****5823</p>
                                <p>Mastercard</p>
                            </div>
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Plan aspirante basico</p>
                                <p>22/08/2023</p>
                                <p>$150.00</p>
                                <p>Tarjeta: ****5823</p>
                                <p>Mastercard</p>
                            </div>
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Plan aspirante basico</p>
                                <p>22/08/2023</p>
                                <p>$150.00</p>
                                <p>Tarjeta: ****5823</p>
                                <p>Mastercard</p>
                            </div>
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Plan aspirante basico</p>
                                <p>22/08/2023</p>
                                <p>$150.00</p>
                                <p>Tarjeta: ****5823</p>
                                <p>Mastercard</p>
                            </div>
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Plan aspirante basico</p>
                                <p>22/08/2023</p>
                                <p>$150.00</p>
                                <p>Tarjeta: ****5823</p>
                                <p>Mastercard</p>
                            </div>
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Vacante test 1</p>
                                <p>22/08/2023</p>
                                <p>Revisado</p>
                                <p>Company name</p>
                            </div>
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Vacante test 1</p>
                                <p>22/08/2023</p>
                                <p>Revisado</p>
                                <p>Company name</p>
                            </div>
                            <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                <p>Nombre: Vacante test 1</p>
                                <p>Creado: 22/08/2023</p>
                                <p>Status: Activo</p>
                                <p>Matchs: 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default User;