import Layout from "@/components/Layout";
import useSession from "@/hooks/sessions/useSession";
import InputField from "@/components/InputFiled/InputField";
import EmailData from "@/components/Forms/EmailData";

const Configurations = () => {

    useSession();

    return ( 
        <Layout>
            <EmailData />
        </Layout>
     );
}
 
export default Configurations;