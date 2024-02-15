import { IContent } from "@/types/server";
import { useQuery } from "@tanstack/react-query";

import { NavLink } from "react-router-dom";
import ContentItem from "../ContentItem";
import { getMyBoards } from "@/apis/server";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { useEffect, useState } from "react";

const MypageList = () => {
  const [userId, setUserId] = useState("");
  const { userInfo } = useGetUserInfo();
  const { data: myBoards, isLoading } = useQuery<IContent>({
    queryKey: ["myBoards", userId],
    queryFn: () => getMyBoards(userId),
  });

  useEffect(() => {
    if (userInfo) {
      setUserId(userInfo?.id);
    }
  }, [userInfo]);

  return (
    <>
      {isLoading && (
        <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ">
          <img src="/loading.gif" alt="loading" className="mx-auto" />
        </div>
      )}
      <div className="w-[1200px] flex flex-col gap-10">
        <div>
          <h1 className="flex border-b-2 border-solid text-3xl font-bold p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-nowrap">
            내 서버
            <h2 className="text-xs flex items-end text-wrap pl-3">
              * 서버의 수정을 원하신다면, 서버 추가를 재등록하면 됩니다.
            </h2>
          </h1>
          <div className="flex flex-wrap mx-auto px-4 font-Pretendard justify-center md:justify-normal w-full">
            {myBoards && myBoards.list.map((content, index) => <ContentItem content={content} key={index} />)}
            <div className="flex">
              <NavLink to={"/new"}>
                <button className="w-[180px] h-14 bg-[#3d9148] rounded-lg text-2xl mt-5">+ 서버 추가</button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* <div>
          <div className="border-b-2 border-solid ">
            <h1 className="text-3xl font-bold p-3">내 리뷰</h1>
          </div>
          <button className="w-[180px] h-14 bg-[#7289da] rounded-lg text-2xl mt-5">+ 리뷰 추가</button>
        </div> */}
      </div>
    </>
  );
};

export default MypageList;
