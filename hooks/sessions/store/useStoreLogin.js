import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),
    token: null,
    setToken: (token) => set((state) => ({ ...state, token })),
})

store = devtools(store)
store = persist(store, { name: 'loginStore' })

export default create(store)