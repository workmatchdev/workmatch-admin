import Layout from "@/components/Layout";
import useSession from "@/hooks/sessions/useSession";

const PageBuilder = () => {
    const { user } = useSession();
    return ( 
        <Layout>
        </Layout>
     );
}
 
export default PageBuilder;