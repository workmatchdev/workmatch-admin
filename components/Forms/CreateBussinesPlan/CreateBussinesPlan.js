import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import classes from '../CreateRol/createRol.module.css'
import TextLabel from '@/components/TextLabel';
import ErrorField from '@/components/ErrorField';
import { MembershipBussinesSchema } from '@/lib/formsValidations';

const CreateBussinesPlan = (props) => {
    const {
        setShowModal,
        submit = () => { },
        initialValues = {}
    } = props;
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async values => {
                    submit({ ...values, type: 'bussines' }, initialValues?._id)
                    setShowModal(false)
                }}
                validationSchema={MembershipBussinesSchema}
            >
                {({ errors }) => {
                    return (
                        <Form>
                            <div className='mt-4 mb-4'>
                                <InputFiled
                                    label={'Nombre del plan'}
                                    name="name"
                                />
                            </div>
                            <ErrorField errors={errors.name} />
                            <div className='mt-4 mb-4'>
                                <InputFiled
                                    label={'Limite de numero de matchs por dia por oferta laboral'}
                                    name="countMatchs"
                                />
                            </div>
                            <ErrorField errors={errors.countMatchs} />
                            <div className='mt-4 mb-4'>
                                <InputFiled
                                    label={'Precio'}
                                    name="price"
                                />
                            </div>
                            <ErrorField errors={errors.price} />
                            <div className='mt-4 mb-4'>
                                <InputFiled
                                    label={'Descuento'}
                                    name="disaccount"
                                />
                            </div>
                            <ErrorField errors={errors.disaccount} />
                            <div className='mt-4 mb-4'>
                                <InputFiled
                                    label={'Numero de propuestas laborales activas'}
                                    name="numberJobProposals"
                                />
                            </div>

                            <div className="flex flex-col items-start mt-4 mb-4 p-4">
                                <TextLabel label={'Tipo de periodo'} />
                                <Field
                                    className="w-full text-center rounded-md p-2 border border-gray-300 bg-gray-50"
                                    as="select"
                                    name="duration">
                                    <option>-- Selecciones</option>
                                    <option value={1}>Mensual</option>
                                    <option value={2}>Semestral</option>
                                    <option value={3}>Anual</option>
                                </Field>
                            </div>
                            <ErrorField errors={errors.duration} />
                            <div className={classes.checkboxContainer} role="group" aria-labelledby="checkbox-group">
                                <div className={classes.checkboxContainerCol}>
                                    <label className={classes.labelCheckbox}>
                                        <Field className={classes.checkbox} type="checkbox" name="benefits" value="email" />
                                        Notificaciones por correo
                                    </label>
                                    <label className={classes.labelCheckbox}>
                                        <Field className={classes.checkbox} type="checkbox" name="benefits" value="chat" />
                                        Enviar mensaje al realizar match
                                    </label>
                                    <label className={classes.labelCheckbox}>
                                        <Field className={classes.checkbox} type="checkbox" name="benefits" value="support" />
                                        Soporte inmediato
                                    </label>
                                </div>
                                <div className={classes.checkboxContainerCol}>
                                    <label className={classes.labelCheckbox}>
                                        <Field className={classes.checkbox} type="checkbox" name="benefits" value="listOfAspirants" />
                                        Listado de aspirantes por oferta de trabajo
                                    </label>
                                    <label className={classes.labelCheckbox}>
                                        <Field className={classes.checkbox} type="checkbox" name="benefits" value="noLimitMatches" />
                                        Sin limite de trabajos activos
                                    </label>
                                    {/* <label className={classes.labelCheckbox}>
                                        <Field className={classes.checkbox} type="checkbox" name="benefits" value="validateProfile" />
                                        Limite de trabajos disponibles
                                    </label> */}
                                </div>
                            </div>
                            <ErrorField errors={errors.benefits} />
                            <div className='p-5 flex justify-end'>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Guardar
                                </button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default CreateBussinesPlan;