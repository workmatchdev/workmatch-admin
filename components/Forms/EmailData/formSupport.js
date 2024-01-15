import React from 'react'
import { Formik, Form } from 'formik';
import InputFiled from '../../InputFiled';
import ErrorField from '@/components/ErrorField';
import { validationSchemaEmailConfiguration } from '@/lib/formsValidations';

const FormSupport = () => {

    return (
        <Formik
            initialValues={{
                host: '',
                port: '',
                email: '',
                password: ''
            }}
            onSubmit={(values, props) => {
                props.resetForm()
            }}
            validationSchema={validationSchemaEmailConfiguration}
        >
            {({ errors, touched }) => {
                return (
                    <Form>
                        <div className="w-full mx-auto bg-gray-100 p-4 rounded-md">
                            <p className="p-4 text-center font-bold text-2xl">Configuracion de email</p>
                            <div className="flex flex-col">
                                <InputFiled
                                    label={'Puerto:'}
                                    name="port"
                                />
                            </div>
                            <ErrorField errors={errors.port} componentFieldTouch={touched.port} />
                            <div className="flex flex-col">
                                <InputFiled
                                    label={'Host:'}
                                    name="host"
                                />
                            </div>
                            <ErrorField errors={errors.host} componentFieldTouch={touched.host} />
                            <div className="flex flex-col">
                                <InputFiled
                                    label={'Email:'}
                                    name="email"
                                />
                            </div>
                            <ErrorField errors={errors.email} componentFieldTouch={touched.email} />
                            <div className="flex flex-col">
                                <InputFiled
                                    label={'Password:'}
                                    name="password"
                                />
                            </div>
                            <ErrorField errors={errors.password} componentFieldTouch={touched.password} />
                            <button className="mt-8 p-2 bg-blue-900 rounded-sm font-semibold w-full text-white" type='submit' >Enviar</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default FormSupport;