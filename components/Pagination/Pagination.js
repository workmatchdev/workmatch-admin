import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, handlePageClick, currentPage }) => {

    const pageCount = Math.ceil(totalPages / 10);

    return (
        <div className="flex justify-end w-full mt-10">
            <div className='bg-white'>
                <ReactPaginate
                    containerClassName='bg-white'
                    previousClassName='bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3'
                    nextClassName='bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3'
                    activeLinkClassName="bg-blue-100 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3"
                    pageLinkClassName="border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3"
                    className='inline-flex -space-x-px items-center'
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>

    );
}

export default Pagination;