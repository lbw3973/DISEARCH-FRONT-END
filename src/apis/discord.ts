import { discordInstance } from "@/apis/axios";
import { getCookie } from "@/util/cookie";

interface IResponse {
  features: string[];
  icon: string;
  id: string;
  name: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
}

export const getUserInfo = async () => {
  console.log(getCookie("Disearch_access_token"));
  if (!getCookie("Disearch_access_token")) {
    return null;
  }
  const res = await discordInstance.get("/users/@me");
  return res.data;
};

export const getUserGuildsInfo = async () => {
  if (!getCookie("Disearch_access_token")) {
    return null;
  }
  const res = await discordInstance.get("/users/@me/guilds");
  return res.data.filter((data: IResponse) => {
    return data.owner === true;
  });
};
