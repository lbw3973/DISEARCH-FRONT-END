import { useQuery } from "@tanstack/react-query";
import ContentItem from "../ContentItem";
import { getBoards } from "@/apis/server";
import { IContent } from "@/types/server";

const ContentList = ({ searchType, searchParam }: { searchType?: string; searchParam?: string }) => {
  const { data: boards, isLoading } = useQuery<IContent[]>({
    queryKey: ["boards", searchType, searchParam],
    queryFn: () => getBoards(searchType, searchParam),
  });

  console.log(isLoading);

  return (
    <>
      {isLoading && (
        <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ">
          <img src="/loading.gif" alt="loading" className="mx-auto" />
        </div>
      )}
      <div className="flex flex-wrap mx-auto px-4 font-Pretendard justify-center md:justify-normal w-full">
        {boards && boards.map((content, index) => <ContentItem content={content} key={index} hasJoinButton />)}
      </div>
    </>
  );
};

export default ContentList;
