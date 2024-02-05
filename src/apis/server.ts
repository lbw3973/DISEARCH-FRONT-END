import { IPostBoard } from "@/types/server";
import { instance } from "./axios";

export const getTags = async () => {
  const res = await instance.get("/tags");
  return res.data;
};

export const postBoard = async (data: IPostBoard) => {
  const res = await instance.post("/create", data);
  return res;
};
