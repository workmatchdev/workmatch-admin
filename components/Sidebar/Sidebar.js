import { useRef, useEffect } from 'react';
import classes from './Sidebar.module.css';
import { ChevronRight } from '@/assets/icons';
import useSidebar from './hooks/useSidebar';
import { useRouter } from 'next/router'

const Sidebar = () => {

    const {
        handleSetShowSidebar,
        handleCloseSidebar
    } = useSidebar();

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
                <button className={classes.logOutButton}>Cerrar Sesion</button>
            </div>
            <div className={classes.itemsContainer}>
                <div onClick={() => { router.push('/users'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Aspirantes</p>
                    <ChevronRight className={classes.icon} />
                </div>
                <div onClick={() => { router.push('/companies'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Empresas</p>
                    <ChevronRight className={classes.icon} />
                </div>
                <div onClick={() => { router.push('/metrics'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Metricas</p>
                    <ChevronRight className={classes.icon} />
                </div>
                <div onClick={() => { router.push('/roles'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Roles</p>
                    <ChevronRight className={classes.icon} />
                </div>
                <div onClick={() => { router.push('/admins'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Usuarios</p>
                    <ChevronRight className={classes.icon} />
                </div>
                <div onClick={() => { router.push('/page-builder'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Page Builder</p>
                    <ChevronRight className={classes.icon} />
                </div>
                <div onClick={() => { router.push('/supports'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Soporte</p>
                    <ChevronRight className={classes.icon} />
                </div>
                <div onClick={() => { router.push('/planes'); handleCloseSidebar(); }} className={classes.item}>
                    <p>Planes</p>
                    <ChevronRight className={classes.icon} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;