import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    password: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Email no valido').required('Campo requerido'),
});
