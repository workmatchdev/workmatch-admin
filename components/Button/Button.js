const Button = (props) => {
    const { children, styles } = props;
    return ( 
        <button className={styles}>
            {children}
        </button>
     );
}
 
export default Button;