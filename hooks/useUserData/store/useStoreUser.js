import { create } from 'zustand';

let store = (set) => ({
    applicants: [],
    error: null,
    setError: (error) => set((state) => ({ ...state, error })),
    setApplicants: (applicants) => set((state) => ({ ...state, applicants })),
    companies: [],
    setCompanies: (companies) => set((state) => ({ ...state, companies })),
    totalPages: 0,
    setTotalPages: (pages) => set((state) => ({...state, totalPages:pages})),
    currentPage: 1,
    setCurrentPage: (currentPage) => set((state) => ({...state, currentPage})),
    
})
export default create(store)