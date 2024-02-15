import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ISearchedDataStore {
  searchedData: string[];
  setSearchedData: (state: string) => void;
  removeSearchedData: (state: string) => void;
  resetSearchedData: () => void;
}

const searchedDataStore = create(
  persist<ISearchedDataStore>(
    set => ({
      searchedData: [],
      setSearchedData: state =>
        set(prev => {
          if (prev.searchedData.includes(state)) {
            return {
              searchedData: [state, ...prev.searchedData.filter(item => item !== state)],
            };
          }
          return { searchedData: [state, ...prev.searchedData] };
        }),
      removeSearchedData: state =>
        set(prev => {
          return {
            searchedData: prev.searchedData.filter(item => item !== state),
          };
        }),
      resetSearchedData: () => set({ searchedData: [] }),
    }),
    { name: "createData", storage: createJSONStorage(() => localStorage) },
  ),
);

export const useSearchedDataStore = () => searchedDataStore(state => state);
