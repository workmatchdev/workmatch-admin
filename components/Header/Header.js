import Image from "next/image";
import { MenuIcon, UserIcon, SettingsIcon } from "@/assets/icons";
import logo from '@/assets/logo.png'
import classes from './header.module.css';
import Sidebar from "../Sidebar/Sidebar";
import useSidebar from "../Sidebar/hooks/useSidebar";
import { useRouter } from "next/router";

const Header = () => {

    const {
        handleSetShowSidebar,
        showSideBar
    } = useSidebar()
    const router = useRouter();
    return (
        <>
            { showSideBar ? <Sidebar /> : null }
            <div className={classes.header}>
                <div className="">
                    <div onClick={() => router.push('/users') } className="bg-white rounded-full p-0 cursor-pointer">
                        <Image
                            src={logo}
                            alt='logo'
                            width={80}
                            height={30}
                        />
                    </div>
                </div>
                <div className="flex justify-end w-2/3">
                    <button onClick={() => handleSetShowSidebar()} className="buttonHeader"><MenuIcon className={classes.iconHeader} /></button>
                    {/* <button className="buttonHeader"><UserIcon className={classes.iconHeader} /></button>
                    <button className="buttonHeader"><SettingsIcon className={classes.iconHeader} /></button> */}
                </div>
            </div>
        </>
    );
}

export default Header;