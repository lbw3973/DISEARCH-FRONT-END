import { instance } from "./axios";

export const getTags = async () => {
  const res = await instance.get("/tags");
  return res.data;
};
