import { getCookie } from "@/util/cookie";
import { create } from "zustand";

interface IUserLoginStatusStore {
  status: boolean;
  setStatus: (status: boolean) => void;
}

const LoginStatusStore = create<IUserLoginStatusStore>(set => ({
  status: getCookie("Disearch_access_token") as boolean,
  setStatus: (state: boolean) => set({ status: state }),
}));

export const useUserLoginStatusStore = () => LoginStatusStore(state => state);
