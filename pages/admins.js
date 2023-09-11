import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import CreateUser from "@/components/Forms/CreateUser";
import classes from '@/styles/roles.module.css';



const Admins = () => {
    return (
        <Layout>
            <div className={classes.buttonsContainer}>
                <Modal title='Crear usuario' buttonStyle={classes.buttonCreateRoles}>
                    <CreateUser />
                </Modal>
            </div>
            <div className="bg-gray-100 text-gray-600 px-4 p-10">
                <div className={classes.rolesList}>
                    <div className={classes.roleItem}>
                        <p>Jose Almazan - Adminstrador</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
                                <CreateUser />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                    <div className={classes.roleItem}>
                        <p>Cosme Fulanito - Editor</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
                                <CreateUser />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                    <div className={classes.roleItem}>
                        <p>Randome Name - Support</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
                                <CreateUser />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                    <div className={classes.roleItem}>
                        <p>Administrador</p>
                        <div className={classes.roleItemActions}>
                            <Modal title='Editar' buttonStyle={classes.editarRol}>
                                <CreateUser />
                            </Modal>
                            <button className={classes.deleteRol}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default Admins;