import { useRef, useEffect } from 'react';
import classes from './Sidebar.module.css';
import {
    ChevronRight,
    AspirantIcon,
    CompanyIcon,
    GraphicIcon,
    RolesIcon,
    SupportIcon,
    CreditCartIcon,
    PageBuilderIcon,
    UserIcon
} from '@/assets/icons';
import useSidebar from './hooks/useSidebar';
import { useRouter } from 'next/router'
import useLogin from '@/hooks/sessions/useLogin';

const Sidebar = () => {

    const {
        handleSetShowSidebar,
        handleCloseSidebar
    } = useSidebar();

    const {
        handleLogout,
        privileges
    } = useLogin()

    const router = useRouter();

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    handleSetShowSidebar();
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef} className={classes.root}>
            <div className={classes.user}>
                <p className={classes.userData}>Cosme Fulanito - Reviewr</p>
                <p className={classes.userData}>test@test.com</p>
                <button onClick={() => handleLogout()} className={classes.logOutButton}>Cerrar Sesion</button>
            </div>
            <div className={classes.itemsContainer}>
                {privileges.includes('Users') && <div onClick={() => { router.push('/users'); handleCloseSidebar(); }} className={classes.item}>
                    <div className={classes.textItemContainer}>
                        <AspirantIcon className={classes.iconItem} />
                        <p>Aspirantes</p>
                    </div>
                    <ChevronRight className={classes.icon} />
                </div>}
                {privileges.includes("Companies") &&
                    <div onClick={() => { router.push('/companies'); handleCloseSidebar(); }} className={classes.item}>
                        <div className={classes.textItemContainer}>
                            <CompanyIcon className={classes.iconItem} />
                            <p>Empresas</p>
                        </div>
                        <ChevronRight className={classes.icon} />
                    </div>
                }
                {/* {
                    privileges.includes("Metricas") &&
                    <div onClick={() => { router.push('/metrics'); handleCloseSidebar(); }} className={classes.item}>
                        <div className={classes.textItemContainer}>
                            <GraphicIcon className={classes.iconItem} />
                            <p>Metricas</p>
                        </div>
                        <ChevronRight className={classes.icon} />
                    </div>
                } */}
                {
                    privileges.includes("Roles") &&
                    <div onClick={() => { router.push('/roles'); handleCloseSidebar(); }} className={classes.item}>
                        <div className={classes.textItemContainer}>
                            <RolesIcon className={classes.iconItem} />
                            <p>Roles</p>
                        </div>
                        <ChevronRight className={classes.icon} />
                    </div>
                }
                {
                    privileges.includes("Admin") &&
                    <div onClick={() => { router.push('/admins'); handleCloseSidebar(); }} className={classes.item}>
                        <div className={classes.textItemContainer}>
                            <UserIcon className={classes.iconItem} />
                            <p>Usuarios</p>
                        </div>
                        <ChevronRight className={classes.icon} />
                    </div>
                }
                {
                    privileges.includes("PageBuilder") &&
                    <div onClick={() => { router.push('/page-builder'); handleCloseSidebar(); }} className={classes.item}>
                        <div className={classes.textItemContainer}>
                            <PageBuilderIcon className={classes.iconItem} />
                            <p>Page Builder</p>
                        </div>
                        <ChevronRight className={classes.icon} />
                    </div>
                }
                {privileges.includes("Support") &&
                    <div onClick={() => { router.push('/supports'); handleCloseSidebar(); }} className={classes.item}>
                        <div className={classes.textItemContainer}>
                            <SupportIcon className={classes.iconItem} />
                            <p>Soporte</p>
                        </div>
                        <ChevronRight className={classes.icon} />
                    </div>
                }
                {privileges.includes("Membresias") &&
                    <div onClick={() => { router.push('/planes'); handleCloseSidebar(); }} className={classes.item}>
                        <div className={classes.textItemContainer}>
                            <CreditCartIcon className={classes.iconItem} />
                            <p>Membresias</p>
                        </div>
                        <ChevronRight className={classes.icon} />
                    </div>
                }
                <div onClick={() => { router.push('/configurations'); handleCloseSidebar(); }} className={classes.item}>
                    <div className={classes.textItemContainer}>
                        <CreditCartIcon className={classes.iconItem} />
                        <p>Configuraciones</p>
                    </div>
                    <ChevronRight className={classes.icon} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;