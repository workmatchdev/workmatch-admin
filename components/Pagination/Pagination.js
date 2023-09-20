const Pagination = () => {
    return (
        <div className="flex justify-end w-full mt-10">
            <div aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <a href="#"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3">Previous</a>
                    </li>
                    <li>
                        <a href="#"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">1</a>
                    </li>
                    <li>
                        <a href="#"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page"
                            className="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3">3</a>
                    </li>
                    <li>
                        <a href="#"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">4</a>
                    </li>
                    <li>
                        <a href="#"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">5</a>
                    </li>
                    <li>
                        <a href="#"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;