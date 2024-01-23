import { getUserInfo } from "@/apis/discord";
import { IUserInfo } from "@/types/discord";
import { useQuery } from "@tanstack/react-query";

export const useGetUserInfo = () => {
  const { data: userInfo } = useQuery<IUserInfo>({ queryKey: ["userInfo"], queryFn: getUserInfo, staleTime: Infinity });
  return { userInfo };
};
