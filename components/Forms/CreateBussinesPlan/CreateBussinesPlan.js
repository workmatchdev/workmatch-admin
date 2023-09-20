import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import classes from '../CreateRol/createRol.module.css'
import TextLabel from '@/components/TextLabel';

const CreateBussinesPlan = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    countMatchs: 0,
                    price: 0,
                    disaccount:0,
                    privileges: []
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    setShowModal(false)
                }}
            >
                <Form>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Nombre del plan'}
                            name="name"
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Limite de numero de matchs por dia por oferta laboral'}
                            name="countMatchs"
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Precio'}
                            name="price"
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Descuento'}
                            name="disaccount"
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Numero de propuestas laborales activas'}
                            name="numberJobProposals"
                        />
                    </div>
                    <div className="flex flex-col items-start mt-4 mb-4 p-4">
                        <TextLabel label={'Tipo de periodo'} />
                        <select className="w-full text-center rounded-sm p-2 border border-gray-300 bg-gray-50">
                            <option>-- Selecciones</option>
                            <option value={1}>Mensual</option>
                            <option value={2}>Semestral</option>
                            <option value={3}>Anual</option>
                        </select>
                    </div>
                    <div className={classes.checkboxContainer} role="group" aria-labelledby="checkbox-group">
                        <div className={classes.checkboxContainerCol}>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Users" />
                                Notificaciones por correo
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Companies" />
                                Chat
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Roles" />
                                Soporte
                            </label>
                        </div>
                        <div className={classes.checkboxContainerCol}>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Admin" />
                                Numero de match en ofertas laborales
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Support" />
                                Estado de match
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="PageBuilder" />
                                Chequear si tu perfil fue revisado
                            </label>
                        </div>
                    </div>

                    <div className='p-5 flex justify-end'>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Guardar
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
 
export default CreateBussinesPlan;