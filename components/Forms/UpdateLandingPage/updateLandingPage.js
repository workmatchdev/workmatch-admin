import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import TextLabel from '@/components/TextLabel';
import useRoles from '@/hooks/roles/useRoles';
import ErrorField from '@/components/ErrorField';
import { LandingPageSchema } from '@/lib/formsValidations';
import useUpdateLandingPage from './hooks/useUpdateLandingPage';
import ErrorForm from '@/components/ErrorForm';

const UpdateLandingPage = ({ setShowModal }) => {

    const { initialValues, handleSubmit, submitError, isLoading } = useUpdateLandingPage({
        setShowModal
    });

    if(isLoading){
        return <p className='text-center font-bold text-3xl' >Cagando...</p>
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async values => {
                    handleSubmit(values)
                }}
                validationSchema={LandingPageSchema}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form>
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Titulo 1'}
                                name="title1"
                            />
                        </div>
                        <ErrorField errors={errors.title1} componentFieldTouch={touched.title1} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Titulo 2'}
                                name="title2"
                            />
                        </div>
                        <ErrorField errors={errors.title2} componentFieldTouch={touched.title2} />
                        <div className='mt-6 mb-6 px-5'>
                            <TextLabel label={'Imagen de fondo'} />
                            <input
                                label={'Imagen de fondo'}
                                type='file'
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64 = reader.result;
                                        setFieldValue('background1', base64)
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.background1} componentFieldTouch={touched.background1} />
                        {/* --------------------------------------------------------------------- */}
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Titulo tarjeta descriptiva 1'}
                                name="card1"
                            />
                        </div>
                        <ErrorField errors={errors.card1} componentFieldTouch={touched.card1} />
                        <div className='mt-4 mb-6 px-5'>
                            <TextLabel label={'Imagen de fondo tarjeta 1'} />
                            <input
                                type='file'
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64 = reader.result;
                                        setFieldValue('backgroundCard1', base64)
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.backgroundCard1} componentFieldTouch={touched.backgroundCard1} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label="Descripcion tarjeta 1"
                                as="textarea"
                                name="descriptionCard1"
                            />
                        </div>
                        <ErrorField errors={errors.descriptionCard1} componentFieldTouch={touched.descriptionCard1} />
                        {/* ------------------------------------------------- */}
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Titulo tarjeta descriptiva 2'}
                                name="card2"
                            />
                        </div>
                        <ErrorField errors={errors.card2} componentFieldTouch={touched.card2} />
                        <div className='mt-6 mb-6 px-5'>
                            <TextLabel label={'Imagen de fondo tarjeta 2'} />
                            <input
                                label={'Imagen de fondo'}
                                type='file'
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64 = reader.result;
                                        setFieldValue('backgroundCard2', base64)
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.backgroundCard2} componentFieldTouch={touched.backgroundCard2} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label="Descripcion tarjeta 2"
                                as="textarea"
                                name="descriptionCard2"
                            />
                        </div>
                        <ErrorField errors={errors.descriptionCard2} componentFieldTouch={touched.descriptionCard2} />
                        {/* -------------------------------------------------------------- */}
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Titulo tarjeta descriptiva 3'}
                                name="card3"
                            />
                        </div>
                        <ErrorField errors={errors.card3} componentFieldTouch={touched.card3} />
                        <div className='mt-6 mb-6 px-5'>
                            <TextLabel label={'Imagen de fondo tarjeta 3'} />
                            <input
                                label={'Imagen de fondo'}
                                type='file'
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64 = reader.result;
                                        setFieldValue('backgroundCard3', base64)
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.backgroundCard3} componentFieldTouch={touched.backgroundCard3} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label="Descripcion tarjeta 3"
                                as="textarea"
                                name="descriptionCard3"
                            />
                        </div>
                        <ErrorField errors={errors.descriptionCard3} componentFieldTouch={touched.descriptionCard3} />
                        {/* ------------------------------------------------------------------------- */}

                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Titulo Banner'}
                                name="bannerTitle"
                            />
                        </div>
                        <ErrorField errors={errors.bannerTitle} componentFieldTouch={touched.bannerTitle} />
                        <div className='mt-6 mb-6 px-5'>
                            <TextLabel label={'Imagen de fondo banner'} />
                            <input
                                label={'Imagen de fondo'}
                                type='file'
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64 = reader.result;
                                        setFieldValue('backgroundBanner', base64)
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }

                                }}
                            />
                        </div>
                        <ErrorField errors={errors.backgroundBanner} componentFieldTouch={touched.backgroundBanner} />
                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label="Descripcion Banner"
                                as="textarea"
                                name="descriptionBanner"
                            />
                        </div>
                        <ErrorField errors={errors.descriptionBanner} componentFieldTouch={touched.descriptionBanner} />
                        
                        {/* --------------------------------------------------------------------------------------------------- */}

                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Url facebook'}
                                name="facebook"
                            />
                        </div>
                        <ErrorField errors={errors.bannerTitle} componentFieldTouch={touched.bannerTitle} />

                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'URL Youtube'}
                                name="youtube"
                            />
                        </div>
                        <ErrorField errors={errors.bannerTitle} componentFieldTouch={touched.bannerTitle} />

                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'URL Linkedin'}
                                name="linkedin"
                            />
                        </div>
                        <ErrorField errors={errors.bannerTitle} componentFieldTouch={touched.bannerTitle} />

                        <div className='mt-4 mb-4'>
                            <InputFiled
                                label={'Email'}
                                name="email"
                            />
                        </div>
                        <ErrorField errors={errors.bannerTitle} componentFieldTouch={touched.bannerTitle} />

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