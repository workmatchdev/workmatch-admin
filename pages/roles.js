import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import CreateRole from "@/components/Forms/CreateRol/CreateRol";
import EditRol from "@/components/Forms/EditRol";
import classes from '@/styles/roles.module.css';

const Roles = () => {
    return (
        <Layout>
            <div className={classes.buttonsContainer}>
                <Modal title='Crear nuevo rol' buttonStyle={classes.buttonCreateRoles}>
                    <CreateRole />
                </Modal>
            </div>
            <div className="bg-gray-100 text-gray-600 px-4 p-10">
                <div className={classes.rolesList}>
                    <div className={classes.roleItem}>
                        <p>Administrador</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
                                <EditRol />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                    <div className={classes.roleItem}>
                        <p>Administrador</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
                                <EditRol />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                    <div className={classes.roleItem}>
                        <p>Administrador</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
                                <EditRol />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                    <div className={classes.roleItem}>
                        <p>Administrador</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
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