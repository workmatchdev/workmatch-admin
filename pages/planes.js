import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import CreatePlan from "@/components/Forms/CreatePlan";
import CreateBussinesPlan from "@/components/Forms/CreateBussinesPlan";

const Planes = () => {
    return (
        <Layout>
            <Modal title='Crear plan para aspirante'>
                <CreatePlan />
            </Modal>
            <Modal title='Crear plan para empresa'>
                <CreateBussinesPlan />
            </Modal>
        </Layout>
    );
}

export default Planes;