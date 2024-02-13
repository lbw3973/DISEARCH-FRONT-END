import { IPostBoard } from "@/types/server";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ICreateDataStore {
  createData: IPostBoard;
  setCreateData: (state: IPostBoard) => void;
  resetCreateData: () => void;
}
const initialState = {
  serverId: "",
  serverName: "",
  userId: "",
  iconId: "",
  category: "",
  tag: [],
  content: "",
};
const createDataStore = create(
  persist<ICreateDataStore>(
    set => ({
      createData: initialState,
      setCreateData: state => set({ createData: state }),
      resetCreateData: () => set({ createData: initialState }),
    }),
    { name: "createData", storage: createJSONStorage(() => sessionStorage) },
  ),
);

export const useCreateDataStore = () => createDataStore(state => state);
