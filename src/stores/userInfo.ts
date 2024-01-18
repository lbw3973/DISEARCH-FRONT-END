import { IUserInfo } from "@/types/discord";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUserInfoStore {
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
  resetUserInfo: () => void;
}

const initialState = {
  id: "",
  email: "",
  name: "",
  nickName: "",
};

const userInfoStore = create(
  persist<IUserInfoStore>(
    set => ({
      userInfo: initialState,
      setUserInfo: (_userInfo: IUserInfo) => set({ userInfo: _userInfo }),
      resetUserInfo: () => set({ userInfo: initialState }),
    }),
    {
      name: "userInfoStorage",
    },
  ),
);

export const useUserInfoStore = () => userInfoStore(state => state);
