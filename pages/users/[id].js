import { useMemo } from "react";
import Layout from "@/components/Layout";
import useSession from "@/hooks/sessions/useSession";
import useGetUser from "@/hooks/useUserData/useGetUser";

const User = () => {
    const { user } = useSession();
    const { currentUser, isLoading } = useGetUser();
    console.log('currentUser', currentUser);
    const {
        email,
        image,
        lastName,
        name,
        profile,
        status
    } = currentUser?.user || {};

    const {
        membership,
        activeMemberships
    } = currentUser?.currentMemberships || {};

    const paymentMemberships = currentUser?.paymentMemberships;
    const currentMemberships = currentUser?.currentMemberships;

    const limitDateMembership = useMemo(() => {
        const limitMembership = activeMemberships?.durations;
        if (limitMembership) {
            const fecha = new Date(limitMembership);
            const opciones = { day: 'numeric', month: '2-digit', year: 'numeric' };
            const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
            return fechaFormateada
        }
        return ''
    }, [activeMemberships])

    return (
        <Layout>
            {isLoading && (
                <div role="status" class="flex flex-col justify-center items-center fixed z-10 bg-gray-200 w-full h-full">
                    <svg aria-hidden="true" class="w-20 h-20 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                    <span class="">Loading...</span>
                </div>
            )}
            <div className="flex justify-between flex-row">
                <div className="w-1/5 mr-4 bg-gray-100 h-[800px] p-4">
                    <div class="w-full h-[185px] rounded-full bg-black overflow-hidden">
                        <img class="object-cover h-full w-full mx-auto" src={image?.url} />
                    </div>
                    <div className="mt-4">
                        <p className="py-1 font-light"> <span className="font-semibold" >Nombre:</span> {name} {lastName}</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Email:</span> {email}</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Telefono:</span> {profile?.phone}</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Membresia:</span> {membership?.name}</p>
                        <p className="py-1 font-light"> <span className="font-semibold" >Vigencia:</span> {limitDateMembership}</p>
                        {/* <p className="py-1 font-light"> <span className="font-semibold" >Ultima Sesion:</span> 22/09/2023</p> */}
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        <p className="mr-2 font-semibold">Cuenta bloqueada:</p>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer outline-none" checked={!status} />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
                <div className="w-4/5 p-4 bg-gray-100">
                    <div className="">
                        <button className="bg-gray-300 p-4 rounded-t-lg">Pagos y membresias</button>
                        {/* <button className="bg-gray-200 p-4 rounded-t-lg">Postulaciones</button> */}
                        {/* <button className="bg-gray-200 p-4 rounded-t-lg">Trabajos</button> */}
                    </div>
                    <div className="bg-gray-300 p-4 w-full">
                        <div className="flex flex-row justify-start flex-wrap">
                            {paymentMemberships?.map(paymentMembership => {
                                const {
                                    membership,
                                    paymentMembership: paymentMembershipData
                                } = paymentMembership || {};

                                const cantidadFormateada = membership?.price?.toLocaleString('es-ES', {
                                    style: 'currency',
                                    currency: 'MXN' // Cambia 'EUR' por el código de la moneda que necesites
                                });

                                const limitMembership = paymentMembershipData?.durations;
                                const fecha = new Date(limitMembership);
                                const opciones = { day: 'numeric', month: '2-digit', year: 'numeric' };
                                const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
                                const activeMembership = currentMemberships.activeMemberships._id === paymentMembershipData?._id;
                                return (
                                    <div className="w-[calc(33.33%-1rem)] bg-white p-4 mb-4 mr-4 rounded-md">
                                        <p>{membership?.name}</p>
                                        <p>{fechaFormateada}</p>
                                        <p>{cantidadFormateada}</p>
                                        {activeMembership && <p className="font-bold">Membresia actual</p>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default User;