import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
        <section>
            <Header />
            <div className="max-w-[1400px] mx-auto">
                {children}
            </div>
        </section>
    );
}

export default Layout;