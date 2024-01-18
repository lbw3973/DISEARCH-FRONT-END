import { IUserGuildsInfo } from "@/types/discord";
import { create } from "zustand";

interface IUserGuildsInfoStore {
  userGuildsInfo: IUserGuildsInfo[];
  setUserGuildsInfo: (userGuildsInfo: IUserGuildsInfo[]) => void;
  resetUserGuildsInfo: () => void;
}

const userGuildsStore = create<IUserGuildsInfoStore>(set => ({
  userGuildsInfo: [],
  setUserGuildsInfo: (_userGuildsInfo: IUserGuildsInfo[]) => set({ userGuildsInfo: _userGuildsInfo }),
  resetUserGuildsInfo: () => set({ userGuildsInfo: [] }),
}));

export const useUserGuildsStore = () => userGuildsStore(state => state);
