import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import TextLabel from '@/components/TextLabel';
import useRoles from '@/hooks/roles/useRoles';
import ErrorField from '@/components/ErrorField';
import { TermsSchema } from '@/lib/formsValidations';
import useUpdateTerms from './hooks/useUpdateTerms';
import ErrorForm from '@/components/ErrorForm';
import Editor from '@/components/Editor';

const UpdateLandingPage = ({ setShowModal }) => {

    const { initialValues, handleSubmit, submitError, isLoading } = useUpdateTerms({
        setShowModal
    });

    if (isLoading) {
        return <p className='text-center font-bold text-3xl' >Cagando...</p>
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    handleSubmit(values)
                }}
                validationSchema={TermsSchema}
            >
                {({ errors, touched, setFieldValue, values }) => (
                    <Form>
                        <div className='mt-4 mb-4 p-5'>
                            <TextLabel
                                label={'Terminos y condiciones'}
                            />
                            <Editor
                                initialValue={values.terminosYcondiciones}
                                onChange={(value) => {
                                    if (value.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
                                        setFieldValue('terminosYcondiciones', "");
                                    } else {
                                        setFieldValue('terminosYcondiciones', value)
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.terminosYcondiciones} componentFieldTouch={touched.terminosYcondiciones} />
                        <ErrorForm errors={submitError} />
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

export default UpdateLandingPage;