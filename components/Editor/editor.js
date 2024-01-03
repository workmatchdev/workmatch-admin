import React, { useState, useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";


function Editor({ onChange, initialValue = '' }) {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    const [value, setValue] = useState(initialValue);

    return <ReactQuill theme="snow" value={value} onChange={(value) => {
        if (onChange) {
            onChange(value)
        }
        setValue(value)
    }} />;
}
export default Editor;