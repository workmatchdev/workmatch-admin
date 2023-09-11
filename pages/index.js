import InputField from "@/components/InputFiled/InputField"
import Button from "@/components/Button/Button"
import classes from '@/styles/login.module.css'
import { Formik, Form } from 'formik';


export default function Home() {
  return (
    <div className={classes.generalContainerLogin}>
      <div className={classes.loginContainer}>
        <h1 className={classes.title}>Inicio de Sesión</h1>
        <Formik
          initialValues={{
            user: '',
            password: ''
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <InputField
              label={'Usuario'}
              name="user"
            />
            <InputField
              label={'Contraseña'}
              type="password"
              name='password'
            />
            <Button
              type='submit'
              styles={classes.loginButton}
            >
              <p className="text-white">Iniciar Sesion</p>
            </Button>
          </Form>
        </Formik>

      </div>
    </div>
  )
}
