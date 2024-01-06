import React, { useRef } from 'react'
import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import TextLabel from '@/components/TextLabel';
import ErrorField from '@/components/ErrorField';
import { SupportSchema } from '@/lib/formsValidations';
import useSupport from '@/hooks/support/useSupport';

const FormSupport = () => {

    const { handleCreateSupport } = useSupport();

    const fileInputRef = useRef(null);

    const handleClearInput = () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    };

    return (
        <Formik
            initialValues={{
                name: '',
                image: '',
                email: '',
                message: ''
            }}
            onSubmit={(values, props) => {
                handleCreateSupport(values);
                props.resetForm()
                setFieldValue('image', '')
                handleClearInput()
                
            }}
            validationSchema={SupportSchema}
        >
            {({ errors, touched, setFieldValue }) => {
                return (
                    <Form>
                        <div className="w-full mx-auto bg-gray-100 p-4 rounded-md">
                            <p className="p-4 text-center font-bold text-2xl">Soporte</p>
                            <div className="flex flex-col">
                                <InputFiled
                                    label={'Nombre:'}
                                    name="name"
                                />
                            </div>
                            <ErrorField errors={errors.name} componentFieldTouch={touched.name} />
                            <div className="flex flex-col">
                                <InputFiled
                                    label={'Email:'}
                                    name="email"
                                />
                            </div>
                            <ErrorField errors={errors.email} componentFieldTouch={touched.email} />
                            <div className="flex flex-col mb-4">
                                <div className='px-5 overflow-hidden w-full'>
                                    <TextLabel label={'Archivo'} />
                                    <input
                                        ref={fileInputRef}
                                        label={'Imagen de fondo'}
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
                            </div>
                            {/* <ErrorField errors={errors.file} componentFieldTouch={touched.file} /> */}
                            <div className='mt-4 mb-4'>
                                <InputFiled
                                    label="Mensaje"
                                    as="textarea"
                                    name="message"
                                />
                            </div>
                            <ErrorField errors={errors.message} componentFieldTouch={touched.message} />
                            <button className="mt-8 p-2 bg-pink-600 rounded-sm font-semibold w-full text-white" type='submit' >Enviar</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default FormSupport;