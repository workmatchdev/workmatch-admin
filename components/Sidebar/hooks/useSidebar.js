import useStore from "../store/store";

const useSidebar = () => {
    
    const {
        showSideBar,
        setShowSideBar
    } = useStore(state => state)
    
    const handleSetShowSidebar = () => setShowSideBar(!showSideBar);
    const handleCloseSidebar = () => setShowSideBar(false);

    return {
        showSideBar,
        handleSetShowSidebar,
        handleCloseSidebar
    };
}
 
export default useSidebar;