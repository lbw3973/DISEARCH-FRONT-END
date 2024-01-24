import ContentList from "@/components/ContentList";
import { useParams } from "react-router-dom";

const Group = () => {
  const { group, id } = useParams();
  return (
    <>
      <div className="text-center my-20">
        <span
          className={`${group === "category" ? "bg-[#424549] text-white" : "bg-[#dbeafe] text-black"} px-2 py-1 rounded-lg font-bold mr-1`}
        >
          {id}
        </span>
        {group === "category" ? "카테고리" : "태그"}로 검색한 결과입니다.
      </div>
      <ContentList />
    </>
  );
};

export default Group;
