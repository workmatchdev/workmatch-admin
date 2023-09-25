import React from 'react';

const ErrorField = ({ errors }) => {
    if(!errors) return null
    return ( 
        <p className='text-red-500 text-center mt-5' >{errors}</p>
     );
}
 
export default ErrorField;