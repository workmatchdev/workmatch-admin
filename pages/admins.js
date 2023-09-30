import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import CreateUser from "@/components/Forms/CreateUser";
import UpdateUser from "@/components/Forms/UpdateUser";
import classes from '@/styles/roles.module.css';
import Title from "@/components/Title";
import useSession from "@/hooks/sessions/useSession";
import useUsers from "@/hooks/users/useUsers";

const Admins = () => {
    const { user } = useSession();
    const {
        users,
        handleDeleteItem,
        handleSubmit,
        handleSubmitUpdate
    } = useUsers();
    return (
        <Layout>
            <Title title='Usuarios' />
            <div className={classes.buttonsContainer}>
                <Modal title='Crear usuario' buttonStyle={classes.buttonCreateRoles}>
                    <CreateUser submit={handleSubmit}  />
                </Modal>
            </div>
            <div className="my-8">
                <div>
                    <div className="flex flex-row justify-between bg-gray-300 px-4 py-2">
                        <p className="w-1/4">Nombre</p>
                        <p className="w-1/4">Rol</p>
                        <p className="w-1/4">Activo</p>
                        <p className="w-1/4"></p>
                    </div>
                </div>
                {users.map(user => {
                    return (
                        <div>
                            <div className="flex flex-row items-center justify-between bg-gray-100 px-4 py-2">
                                <p className="font-light text-lg w-1/4">{user.name}</p>
                                <p className="font-light text-lg w-1/4">{user.rol?.name}</p>
                                <div className="w-1/4">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" onChange={() => { handleSubmitUpdate({status:!user.status},user._id) }} checked={user.status} />
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <div className="w-1/4 flex justify-end items-center">
                                    <Modal buttonStyle={classes.editarRol} title='Editar'>
                                        <UpdateUser submit={handleSubmitUpdate} initialValues={{...user, rol: user?.rol?._id}} />
                                    </Modal>
                                    <button className={classes.deleteRol} onClick={() => handleDeleteItem(user._id)} >Eliminar</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
}

export default Admins;