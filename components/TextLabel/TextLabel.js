const TextLabel = ({
    label
}) => {
    return (
        <div>
            <label for={label} 
            className="
                block 
                mb-2 
                text-sm 
                font-medium 
                text-gray-600 
            "
            >{label}</label>
        </div>
    );
}

export default TextLabel;