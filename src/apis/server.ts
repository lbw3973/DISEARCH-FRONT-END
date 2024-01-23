import { instance } from "./axios";

export const getTags = async () => {
  const res = await instance.get("/tags");
  console.log(res.data);
  return res.data;
};
