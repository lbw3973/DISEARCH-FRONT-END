import { getUserInfo } from "@/apis/discord";
import { useUserLoginStatusStore } from "@/stores/userLoginStatus";
import { IUserInfo } from "@/types/discord";
import { useQuery } from "@tanstack/react-query";

export const useGetUserInfo = () => {
  const { status } = useUserLoginStatusStore();
  const { data: userInfo } = useQuery<IUserInfo>({
    queryKey: ["userInfo", status],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });
  return { userInfo };
};
