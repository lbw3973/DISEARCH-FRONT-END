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
export const getBoards = async (page: number, searchType?: string, searchParam?: string) => {
  let endPoint = "/main/board";

  if (searchType) {
    endPoint += `?${searchType}=${searchParam}`;
  }

  const res = await instance.get(`${endPoint}${searchType ? "&" : "?"}page=${page}`);

  return res.data.data;
};

export const getMyBoards = async (userId: string) => {
  const res = await instance.get(`/mypage/board?id=${userId}`);
  return res.data.data;
};
