import { create } from 'zustand'

const useStore = create((set) => ({
    blogList: [],
    setBlogList: (blogList) => set(() => ({ blogList })),
}))

export default useStore;