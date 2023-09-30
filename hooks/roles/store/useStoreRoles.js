import { create } from 'zustand';

let store = (set) => ({
    roles: [],
    error: null,
    setError: (error) => set((state) => ({ ...state, error })),
    setRoles: (roles) => set((state) => ({ ...state, roles })),
    addRol: (rol) => set((state) => ({ ...state, roles: [...state.roles, rol] })),
    deleteRol: (id) => set((state) => ({ ...state, roles: state.roles.filter(item => item._id !== id) })),
    updateRol: (rol) => set((state) => ({
        ...state, roles: state.roles.map(item => {
            if (item._id !== rol._id) return item;
            return rol
        })
    }))
})
export default create(store)