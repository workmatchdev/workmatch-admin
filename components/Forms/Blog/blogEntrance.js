import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import TextLabel from '@/components/TextLabel';
import ErrorField from '@/components/ErrorField';
import { BlogEntranceSchema, BlogEntranceSchemaUpdate } from '@/lib/formsValidations';
import ErrorForm from '@/components/ErrorForm';
import Editor from '@/components/Editor';
import useBlogEntrance from './useBlogEntrance';

const BlogEntrance = ({ setShowModal, id }) => {

    const { handleSubmit, initialValues, submitError, isLoading } = useBlogEntrance({ setShowModal, id });

    const schema = id ? BlogEntranceSchemaUpdate : BlogEntranceSchema;

    if (isLoading) {
        return <p className='text-center font-bold text-3xl' >Cagando...</p>
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async values => {
                    handleSubmit(values)
                }}
                validationSchema={schema}
            >
                {({ errors, touched, setFieldValue, values }) => (
                    <Form>
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Titulo'}
                                name="title"
                            />
                        </div>
                        <ErrorField errors={errors.title} componentFieldTouch={touched.title} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'URL'}
                                name="url"
                            />
                        </div>
                        <ErrorField errors={errors.url} componentFieldTouch={touched.url} />
                        <div className='mt-4 mb-4 p-6'>
                            <TextLabel
                                label={'Imagen'}
                            />
                            <input
                                label={'Imagen'}
                                type='file'
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64 = reader.result;
                                        setFieldValue('image', base64)
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.image} componentFieldTouch={touched.image} />
                        <div className='mt-4 mb-4'>
                            <InputFiled label={'Descripcion corta'}
                                name='shortDescription'
                                as="textarea"
                            />
                        </div>
                        <ErrorField errors={errors.shortDescription} componentFieldTouch={touched.shortDescription} />
                        <div className='mt-4 mb-4 p-5'>
                            <TextLabel
                                label={'Descripcion Larga'}
                            />
                            <Editor
                                initialValue={values.longDescription}
                                onChange={(value) => {
                                    if (value.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
                                        setFieldValue('longDescription', "");
                                    } else {
                                        setFieldValue('longDescription', value)
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.longDescription} componentFieldTouch={touched.longDescription} />
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

export default BlogEntrance;