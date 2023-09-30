import { create } from 'zustand';

let store = (set) => ({
    users: [],
    error: null,
    setError: (error) => set((state) => ({ ...state, error })),
    setUsers: (users) => set((state) => ({ ...state, users })),
    addUser: (user) => set((state) => ({ ...state, users: [...state.users, user] })),
    deleteUser: (id) => set((state) => ({ ...state, users: state.users.filter(item => item._id !== id) })),
    updateUser: (user) => set((state) => ({
        ...state, users: state.users.map(item => {
            if (item._id !== user._id) return item;
            return user
        })
    }))
})
export default create(store)