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
      <div className="w-[90%] bg-[#7289da] p-3 text-white font-Pretendard rounded-lg sticky top-40 mx-auto">
        <div>
          <h3 className="text-xl text-[#424242] text-center mb-3 after:block after:w-1/5 after:h-px after:bg-[rgba(0,0,0,0.2)] after:mx-auto">
            카테고리
          </h3>
          <ul className="flex gap-2 flex-wrap">
            {category.category.map((item, index) => (
              <li
                key={index}
                className="bg-[#424549] py-1 px-2 rounded-md font-bold cursor-pointer text-sm text-center"
                onClick={() => navigate(`/search/category/${item}`)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-11/12 h-px bg-white mx-auto my-3"></div>
        <div>
          <h3 className="text-xl text-[#424242] text-center mb-3 after:block after:w-1/5 after:h-px after:bg-[rgba(0,0,0,0.2)] after:mx-auto">
            인기 태그
          </h3>
          <ul className="flex gap-2 flex-wrap">
            {tags?.map((item, index) => (
              <li
                key={index}
                className="bg-blue-100 text-black py-1 px-2 rounded-md font-bold cursor-pointer text-sm"
                onClick={() => navigate(`/search/tag/${item.name}`)}
              >
                {item.name}({item.count})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
