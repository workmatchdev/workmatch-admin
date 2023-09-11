import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import classes from './createRol.module.css'

const CreateRole = ({ setShowModal }) => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    privileges: []
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    setShowModal(false)
                }}
            >
                <Form>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Nombre del rol'}
                            name="name"
                        />
                    </div>

                    <div className={classes.checkboxContainer} role="group" aria-labelledby="checkbox-group">
                        <div className={classes.checkboxContainerCol}>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Users" />
                                Users
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Companies" />
                                Companies
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Roles" />
                                Roles
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Metricas" />
                                Metricas
                            </label>
                        </div>
                        <div className={classes.checkboxContainerCol}>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Admin" />
                                Admin
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="Support" />
                                Support
                            </label>
                            <label className={classes.labelCheckbox}>
                                <Field className={classes.checkbox} type="checkbox" name="privileges" value="PageBuilder" />
                                Page Builder
                            </label>
                        </div>
                    </div>

                    <div className='p-5 flex justify-end'>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Guardar
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateRole;