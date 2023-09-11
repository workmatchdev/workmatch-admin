import { create } from 'zustand'

const useStore = create((set) => ({
  showSideBar: false,
  setShowSideBar: (showSideBar) => set(() => ({ showSideBar: showSideBar })),
}))

export default useStore;