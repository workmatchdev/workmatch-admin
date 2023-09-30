import { create } from 'zustand';

let store = (set) => ({
    memberships: [],
    error: null,
    setError: (error) => set((state) => ({ ...state, error })),
    setMemberships: (memberships) => set((state) => ({ ...state, memberships })),
    addMembership: (membership) => set((state) => ({ ...state, memberships: [...state.memberships, membership] })),
    deleteMembership: (id) => set((state) => ({ ...state, memberships: state.memberships.filter(item => item._id !== id) })),
    updateMembership: (membership) => set((state) => ({
        ...state, memberships: state.memberships.map(item => {
            if (item._id !== membership._id) return item;
            return membership
        })
    }))
})
export default create(store)