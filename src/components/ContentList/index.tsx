import { useQuery } from "@tanstack/react-query";
import ContentItem from "../ContentItem";
import { getBoards } from "@/apis/server";
import { IContent } from "@/types/server";

const ContentList = () => {
  const { data: boards } = useQuery<IContent[]>({ queryKey: ["boards"], queryFn: getBoards });

  return (
    <div className="flex flex-wrap mx-auto px-4 font-Pretendard justify-center md:justify-normal w-full">
      {boards && boards.map((content, index) => <ContentItem content={content} key={index} hasJoinButton />)}
    </div>
  );
};

export default ContentList;
