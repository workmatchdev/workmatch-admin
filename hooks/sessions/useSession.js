import useStoreLogin from "./store/useStoreLogin";

const useSession = () => {

    const {
        user,
        token
    } = useStoreLogin();

    return {
        user,
        token
    };
}

export default useSession;