import { create } from "zustand";

interface IUserLoginStatusStore {
  status: boolean;
  setStatus: (status: boolean) => void;
}

const LoginStatusStore = create<IUserLoginStatusStore>(set => ({
  status: false,
  setStatus: (state: boolean) => set({ status: state }),
}));

export const useUserLoginStatusStore = () => LoginStatusStore(state => state);
