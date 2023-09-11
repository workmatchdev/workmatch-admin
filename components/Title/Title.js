const Title = (props) => {
    const { title } = props;
    return (
        <div className="w-full border-b-4 pb-4 border-sky-900">
            <h1 className="font-semibold text-4xl">{title}</h1>
        </div>
    );
}

export default Title;