import ContentList from "@/components/ContentList";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Type = () => {
  const { type, param } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!param) {
      navigate("/notfound");
    }
  }, []);

  return (
    <>
      <div className="text-center my-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
        <p>
          <span
            className={`${type === "category" ? "bg-[#424549] text-white" : "bg-[#dbeafe] text-black"} px-2 py-1 rounded-lg font-bold mr-1`}
          >
            {param}
          </span>
          {type === "category" ? "카테고리" : "태그"}로 검색한 결과입니다.
        </p>
      </div>
      <ContentList searchType={type} searchParam={param} />
    </>
  );
};

export default Type;
