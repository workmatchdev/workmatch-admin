import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import TextLabel from '@/components/TextLabel';
import useRoles from '@/hooks/roles/useRoles';
import ErrorField from '@/components/ErrorField';
import { UserUpdateSchema } from '@/lib/formsValidations';

const UpdateUser = (props) => {
    const {
        setShowModal,
        submit = () => { },
        initialValues = {}
    } = props;
    const { roles } = useRoles()
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async values => {
                    submit(values,initialValues._id)
                    setShowModal(false)
                }}
                validationSchema={UserUpdateSchema}
            >
                {({errors,touched}) => (
                    <Form>
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Nombre'}
                                name="name"
                            />
                        </div>
                        <ErrorField errors={errors.name} componentFieldTouch={touched.name} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Email'}
                                name="email"
                            />
                        </div>
                        <ErrorField errors={errors.email} componentFieldTouch={touched.email} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Contraseña'}
                                name="password"
                                type='password'
                            />
                        </div>
                        <ErrorField errors={errors.password} componentFieldTouch={touched.password} />
                        <div className="flex flex-col items-start p-5">
                            <TextLabel label={'Rol'} />
                            <Field
                                className="w-full text-center rounded-md p-2 border border-gray-300 bg-gray-50"
                                as="select"
                                name="rol">
                                <option>-- Selecciones</option>
                                {roles.map(rol => {
                                    return (
                                        <option key={rol._id} value={rol._id}>{rol.name}</option>
                                    )
                                })}
                            </Field>
                        </div>
                        <ErrorField errors={errors.rol} componentFieldTouch={touched.rol} />
                        <div className='p-5 flex justify-end'>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Guardar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default UpdateUser;