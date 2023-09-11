import TextLabel from '@/components/TextLabel'
import classes from './inputFiled.module.css'
import { Field } from 'formik';

const InputField = (props) => {
    const { label, type = 'text', className = classes.root, inputStyle = classes.inputProps, name } = props;
    return (
        <div className={className} >
            <TextLabel label={label} />
            <Field
                type={type}
                className={inputStyle}
                name={name}
            />
        </div>
    );
}

export default InputField;