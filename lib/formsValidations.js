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
    duration: Yup.string().required('Campo requerido'),
    benefits: Yup.array().min(1).of(Yup.string().required()).required('Tienes que seleccionar almenos un beneficio'),
});

export const MembershipBussinesSchema = Yup.object().shape({
    name: Yup.string().required('Campo requerido'),
    countMatchs: Yup.number().integer().required('Campo requerido'),
    price: Yup.number().integer().required('Campo requerido'),
    disaccount: Yup.number().integer().required('Campo requerido'),
    duration: Yup.string().required('Campo requerido'),
    benefits: Yup.array().min(1).of(Yup.string().required()).required('Tienes que seleccionar almenos un beneficio'),
    numberJobProposals: Yup.number().integer().required('Campo requerido'),
});


export const BlogEntranceSchema = Yup.object().shape({
    title: Yup.string().required('Campo requerido'),
    url: Yup.string().required('Campo requerido').matches(
        /^[a-z]+(?:-[a-z]+)*$/,
        "El formato requeirdo es abc-def-ghi y solo minusculas"),
    background: Yup.string().required('Campo requerido'),
    shortDescription: Yup.string().required('Campo requerido'),
    longDescription: Yup.string().required('Campo requerido'),
});

export const LandingPageSchema = Yup.object().shape({
    title1: Yup.string().required('El título 1 es obligatorio'),
    title2: Yup.string().required('El título 2 es obligatorio'),
    // background1: Yup.string().required('El fondo 1 es obligatorio'),
    card1: Yup.string().required('La tarjeta 1 es obligatoria'),
    // backgroundCard1: Yup.string().required('El fondo de la tarjeta 1 es obligatorio'),
    descriptionCard1: Yup.string().required('La descripción de la tarjeta 1 es obligatoria'),
    card2: Yup.string().required('La tarjeta 2 es obligatoria'),
    // backgroundCard2: Yup.string().required('El fondo de la tarjeta 2 es obligatorio'),
    descriptionCard2: Yup.string().required('La descripción de la tarjeta 2 es obligatoria'),
    card3: Yup.string().required('La tarjeta 3 es obligatoria'),
    // backgroundCard3: Yup.string().required('El fondo de la tarjeta 3 es obligatorio'),
    descriptionCard3: Yup.string().required('La descripción de la tarjeta 3 es obligatoria'),
    bannerTitle: Yup.string().required('El título del banner es obligatorio'),
    // backgroundBanner: Yup.string().required('El fondo del banner es obligatorio'),
    descriptionBanner: Yup.string().required('La descripción del banner es obligatoria'),
    facebook: Yup.string().url('El campo Facebook debe ser una URL válida'),
    youtube: Yup.string().url('El campo YouTube debe ser una URL válida'),
    linkedin: Yup.string().url('El campo LinkedIn debe ser una URL válida'),
    email: Yup.string().email('El campo Email debe ser un correo electrónico válido')
});

export const TermsSchema = Yup.object().shape({
    terminosYcondiciones: Yup.string().required('Los terminos y condiciones son obligatorios')
});

export const PolicySchema = Yup.object().shape({
    politicaDePrivacidad: Yup.string().required('Las politicas de privacidad son obligatorios')
});