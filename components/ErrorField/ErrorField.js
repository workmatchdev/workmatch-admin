import React from 'react';

const ErrorField = ({ errors, componentFieldTouch }) => {
    if(!errors && !componentFieldTouch) return null
    return ( 
        <p className='text-red-500 ml-5 mt-[-1rem]' >{errors}</p>
     );
}
 
export default ErrorField;