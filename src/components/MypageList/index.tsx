import { IContent } from "@/types/server";
import { useQuery } from "@tanstack/react-query";

import { NavLink } from "react-router-dom";
import ContentItem from "../ContentItem";
import { getMyBoards } from "@/apis/server";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";

const MypageList = () => {
  const { userInfo } = useGetUserInfo();
  const { data: myBoards, isLoading } = useQuery<IContent>({
    queryKey: ["myboards"],
    queryFn: () => getMyBoards(userInfo?.id as string),
  });

  console.log(myBoards);
  return (
    <>
      {isLoading && (
        <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ">
          <img src="/loading.gif" alt="loading" className="mx-auto" />
        </div>
      )}
      <div className="w-[1200px] flex flex-col gap-10">
        <div>
          <h1 className="border-b-2 border-solid text-3xl font-bold p-3">추가한 내 서버</h1>
          <div className="flex flex-wrap mx-auto px-4 font-Pretendard justify-center md:justify-normal w-full">
            {myBoards &&
              myBoards.list.map((content, index) => <ContentItem content={content} key={index} hasJoinButton />)}
            <div className="flex">
              <button className="w-[180px] h-14 bg-[#7289da] rounded-lg text-2xl mt-5">
                <NavLink to={"/new"}>+ 서버 추가</NavLink>
              </button>
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
