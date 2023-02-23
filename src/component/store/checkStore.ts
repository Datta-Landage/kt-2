import {create} from 'zustand'

const useStores = create((set) => ({
    isTrue: false,
    // function to toggle the isTrue value
    toggleTrue: () => set((state) => ({ isTrue: !state.isTrue })),
  }));

export {useStores}
  