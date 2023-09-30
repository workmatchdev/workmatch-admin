import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import CreatePlan from "@/components/Forms/CreatePlan";
import CreateBussinesPlan from "@/components/Forms/CreateBussinesPlan";
import classes from '@/styles/planes.module.css';
import Title from "@/components/Title";
import useSession from "@/hooks/sessions/useSession";
import useMemberships from "@/hooks/memberships/useMemberships";

const Planes = () => {
    const { user } = useSession();

    const {
        memberships,
        handleSubmit,
        handleSubmitUpdate,
        handleDeleteItem,
    } = useMemberships();

    return (
        <Layout>
            <Title title='Membresias' />
            <div className={classes.buttonsContainer}>
                <Modal buttonStyle={classes.buttonModal} title='Crear plan para aspirante'>
                    <CreatePlan submit={handleSubmit} />
                </Modal>
                <Modal buttonStyle={classes.buttonModal} title='Crear plan para empresa'>
                    <CreateBussinesPlan submit={handleSubmit} />
                </Modal>
            </div>
            <div className="my-8">
                <div>
                    <div className="flex flex-row justify-between bg-gray-300 px-4 py-4">
                        <p className="w-1/5">Nombre</p>
                        <p className="w-1/5">Precio</p>
                        <p className="w-1/5">Tipo</p>
                        <p className="w-1/5">Activo</p>
                        <p className="w-1/5"></p>
                    </div>
                </div>
                {memberships.map(membership => {
                    return (
                        <div>
                            <div className="flex flex-row items-center justify-between bg-gray-100 px-4 py-2">
                                <p className="font-light text-xl w-1/5">{membership.name}</p>
                                <p className="font-light text-xl w-1/5"> $ {membership.price} MXN</p>
                                <p className="font-light text-xl w-1/5"> {membership.type === 'aspirant' ? 'Plan aspirante' : 'Plan empresas'}</p>
                                <div className="w-1/5">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" onChange={() => { handleSubmitUpdate({status:!membership.status},membership._id) }} checked={membership.status} />
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <div className="w-1/5 flex justify-end">
                                    <Modal buttonStyle={classes.buttonModalEditPlan} title='Editar'>
                                        {membership.type === 'aspirant' ? (
                                            <CreatePlan submit={handleSubmitUpdate} initialValues={membership} />
                                        ) : (
                                            <CreateBussinesPlan submit={handleSubmitUpdate} initialValues={membership} />
                                        )}
                                    </Modal>
                                    <button onClick={() => handleDeleteItem(membership._id)} className={classes.deleteRol}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
}

export default Planes;