import { getTags } from "@/apis/server";
import category from "@/constants/category.json";
import { ITags } from "@/types/server";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const SideBar = () => {
  const { data: tags } = useQuery<ITags[]>({ queryKey: ["tags"], queryFn: getTags });

  const navigate = useNavigate();
  return (
    <aside className="relative md:max-w-[300px] md:min-w-[250px] pt-3 max-w-[50%] min-w-[350px]">
      <div className="w-[90%] bg-[rgba(0,0,0,0.5)] text-white font-Pretendard rounded-lg sticky top-40 mx-auto">
        <div className="pb-3">
          <h3 className="text-lg text-white px-20 py-2 bg-[#374151] rounded-t-lg font-bold text-center">카테고리</h3>
          <ul className="flex gap-2 flex-wrap p-3">
            {category.category.map((item, index) => (
              <li
                key={index}
                className="bg-[#ebcce7] text-black py-1 px-2 rounded-md font-bold cursor-pointer text-sm text-center hover:bg-[#e9b3e1] hover:scale-110 duration-300"
                onClick={() => navigate(`/search/category/${item}/1`)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="w-11/12 h-px bg-[#ccc] mx-auto my-3"></div> */}
        <div className="pb-3">
          <h3 className="text-lg text-white px-20 py-2 bg-[#374151] font-bold text-center whitespace-nowrap">
            인기 태그
          </h3>
          <ul className="flex gap-2 flex-wrap p-3">
            {tags &&
              tags
                .sort((a, b) => b.count - a.count)
                .map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#f8b5a5] text-black py-1 px-2 rounded-md cursor-pointer text-sm hover:bg-[#ee9b87] hover:scale-110 duration-300"
                    onClick={() => navigate(`/search/tag/${item.name}/1`)}
                  >
                    <span className="font-bold">{item.name}</span>
                    <span className="text-gray-600 font-bold text-xs">({item.count})</span>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
