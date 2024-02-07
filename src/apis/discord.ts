import { discordBotInstance, discordInstance } from "@/apis/axios";
import { IGuild } from "@/types/server";
import { getCookie } from "@/util/cookie";

export const getUserInfo = async () => {
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
  const res = await discordBotInstance.get(`/guilds/${id}/templates`);
  return res;
};

export const testGuild = async () => {
  const res = await discordBotInstance.get("/guilds/699251850939203600/invites");
  return res;
};

export const getGuildChannels = async (id: string) => {
  const res = await discordBotInstance.get(`/guilds/${id}/channels`);
  return res;
};

export const getGuild = async (id: string) => {
  const res = await discordBotInstance.get(`/guilds/${id}`);
  return res;
};

export const getChannel = async (id: string) => {
  const res = await discordBotInstance.get(`/channels/${id}`);
  return res;
};
