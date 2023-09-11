import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import CreatePlan from "@/components/Forms/CreatePlan";
import CreateBussinesPlan from "@/components/Forms/CreateBussinesPlan";
import classes from '@/styles/planes.module.css';
import Title from "@/components/Title";

const Planes = () => {
    return (
        <Layout>
            <Title title='Membresias' />
            <div className={classes.buttonsContainer}>
                <Modal buttonStyle={classes.buttonModal} title='Crear plan para aspirante'>
                    <CreatePlan />
                </Modal>
                <Modal buttonStyle={classes.buttonModal} title='Crear plan para empresa'>
                    <CreateBussinesPlan />
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
                <div>
                    <div className="flex flex-row items-center justify-between bg-gray-100 px-4">
                        <p className="font-semibold text-xl w-1/5">Plan basico</p>
                        <p className="font-semibold text-xl w-1/5"> $ 315.00 MXN</p>
                        <p className="font-semibold text-xl w-1/5"> Plan aspirante</p>
                        <div className="w-1/5">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" checked={true} />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="w-1/5 flex justify-end">
                            <Modal buttonStyle={classes.buttonModalEditPlan} title='Editar'>
                                <CreateBussinesPlan />
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Planes;