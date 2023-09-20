import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
        <section>
            <Header />
            <div className="max-w-[1400px] mx-auto px-4">
                {children}
            </div>
        </section>
    );
}

export default Layout;