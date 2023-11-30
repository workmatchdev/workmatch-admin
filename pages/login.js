import InputField from "@/components/InputFiled/InputField"
import Button from "@/components/Button/Button"
import ErrorField from "@/components/ErrorField/ErrorField";
import ErrorForm from "@/components/ErrorForm";
import classes from '@/styles/login.module.css'
import { Formik, Form } from 'formik';
import useLogin from "@/hooks/sessions/useLogin";
import { SignupSchema } from "@/lib/formsValidations";
import { validateEmail } from "@/lib/validations";

export default function Home() {

  const { handleLogin, error } = useLogin();

  return (
    <div className={classes.generalContainerLogin}>
      <div className={classes.loginContainer}>
        <h1 className={classes.title}>Inicio de Sesión</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => handleLogin(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <InputField
                label={'Usuario'}
                name="email"
                validte={validateEmail}
              />
              <ErrorField errors={errors.email} componentFieldTouch={touched.email} />
              <InputField
                label={'Contraseña'}
                type="password"
                name='password'
              />
              <ErrorField errors={errors.password} componentFieldTouch={touched.password} />
              <Button
                type='submit'
                styles={classes.loginButton}
              >
                <p className="text-white">Iniciar Sesion</p>
              </Button>
              { <ErrorForm errors={error} /> }
            </Form>
          )}
        </Formik>

      </div>
    </div>
  )
}
