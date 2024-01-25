import Pagination from "@/components/Pagination";
import UserCard from "@/components/UserCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import Layout from "@/components/Layout";
import useSession from "@/hooks/sessions/useSession";
import useUserData from "@/hooks/useUserData";

const Companies = () => {
    const { user } = useSession();
    const { applicants, totalPages, currentPage, handlePageClick } = useUserData({userType: "company"});

    return (
        <Layout>
            <section className=" bg-gray-100 text-gray-600 min-h-screen px-4 p-10">
                <SearchBar />
                <div className="flex flex-col justify-start h-full">
                    <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Empresas</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Nombre</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Telefono</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {applicants.map(applicant => {
                                            if(applicant.userType === "applicant") return null
                                            return (
                                                <UserCard key={applicant._id} data={applicant} />
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} handlePageClick={handlePageClick} />
            </section>
        </Layout>
    );
}

export default Companies;