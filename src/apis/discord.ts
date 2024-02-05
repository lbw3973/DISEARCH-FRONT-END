import { discordBotInstance, discordInstance } from "@/apis/axios";
import { IGuild } from "@/types/server";
import { getCookie } from "@/util/cookie";

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
  return res.data.filter((data: IGuild) => {
    return data.owner === true;
  });
};

export const getGuildCode = async (id: string) => {
  const res = await discordBotInstance.get(`/guilds/${id}/templates?permissions=1`);
  return res;
};
