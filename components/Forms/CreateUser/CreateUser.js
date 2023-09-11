import { Formik, Form, Field } from 'formik';
import InputFiled from '../../InputFiled';
import TextLabel from '@/components/TextLabel';

const CreateUser = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email:'',
                    rol:'',
                    password: ''
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
                            label={'Nombre'}
                            name="name"
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Email'}
                            name="email"
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                        <InputFiled
                            label={'Contraseña'}
                            name="password"
                            type='password'
                        />
                    </div>
                    <div className="flex flex-col items-start p-5">
                        <TextLabel label={'Rol'} />
                        <select name='rol' className="w-full text-center rounded-md p-2 border border-gray-300 bg-gray-50">
                            <option>-- Selecciones</option>
                            <option value="1">Administrador</option>
                            <option value="2">Reviewr</option>
                        </select>
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

export default CreateUser;