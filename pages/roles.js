import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import CreateRole from "@/components/Forms/CreateRol/CreateRol";
import EditRol from "@/components/Forms/EditRol";
import classes from '@/styles/roles.module.css';
import Title from "@/components/Title";
import useSession from "@/hooks/sessions/useSession";

const Roles = () => {
    const { user } = useSession();
    return (
        <Layout>
            <Title title='Roles' />
            <div className={classes.buttonsContainer}>
                <Modal title='Crear nuevo rol' buttonStyle={classes.buttonCreateRoles}>
                    <CreateRole />
                </Modal>
            </div>
            <div className="my-8">
                <div>
                    <div className="flex flex-row justify-between bg-gray-300 px-4 py-4">
                        <p className="w-1/3">Nombre</p>
                        <p className="w-1/3">Activo</p>
                        <p className="w-1/3"></p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between bg-gray-100 px-4 p-2">
                        <p className="font-light text-lg w-1/3">Administrador</p>
                        <div className="w-1/3">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" checked={true} />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="w-1/3 flex justify-end items-center">
                            <Modal buttonStyle={classes.editarRol} title='Editar'>
                                <EditRol />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between bg-gray-100 px-4 p-2">
                        <p className="font-light text-lg w-1/3">Revier</p>
                        <div className="w-1/3">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" checked={true} />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="w-1/3 flex justify-end items-center">
                            <Modal buttonStyle={classes.editarRol} title='Editar'>
                                <EditRol />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between bg-gray-100 px-4 p-2">
                        <p className="font-light text-lg w-1/3">Editor</p>
                        <div className="w-1/3">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" checked={true} />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="w-1/3 flex justify-end items-center">
                            <Modal buttonStyle={classes.editarRol} title='Editar'>
                                <EditRol />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Roles;