import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    password: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Email no valido').required('Campo requerido'),
});

export const RolesSchema = Yup.object().shape({
    name: Yup.string().required('Campo requerido'),
    privileges: Yup.array().min(1).of(Yup.string().required()).required('Tienes que seleccionar almenos un privilegio'),
});

export const UserSchema = Yup.object().shape({
    password: Yup.string().required('Campo requerido'),
    name: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Email no valido').required('Campo requerido'),
    rol: Yup.string().required('Campo requerido'),
});

export const UserUpdateSchema = Yup.object().shape({
    name: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Email no valido').required('Campo requerido'),
    rol: Yup.string().required('Campo requerido'),
});

export const MembershipSchema = Yup.object().shape({
    name: Yup.string().required('Campo requerido'),
    countMatchs: Yup.number().integer().required('Campo requerido'),
    price: Yup.number().integer().required('Campo requerido'),
    disaccount: Yup.number().integer().required('Campo requerido'),
    duration:  Yup.string().required('Campo requerido'),
    benefits: Yup.array().min(1).of(Yup.string().required()).required('Tienes que seleccionar almenos un beneficio'),
});

export const MembershipBussinesSchema = Yup.object().shape({
    name: Yup.string().required('Campo requerido'),
    countMatchs: Yup.number().integer().required('Campo requerido'),
    price: Yup.number().integer().required('Campo requerido'),
    disaccount: Yup.number().integer().required('Campo requerido'),
    duration:  Yup.string().required('Campo requerido'),
    benefits: Yup.array().min(1).of(Yup.string().required()).required('Tienes que seleccionar almenos un beneficio'),
    numberJobProposals: Yup.number().integer().required('Campo requerido'),
});