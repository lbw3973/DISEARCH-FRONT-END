import category from "@/constants/category.json";

const mock_tag = [
  "게임(99)",
  "수다(98)",
  "스팀(97)",
  "롤(96)",
  "소통(95)",
  "리그오브레전드(94)",
  "배틀그라운드(44)",
  "발로란트(33)",
  "스팀게임(32)",
  "새벽(23)",
  "대화(9)",
];

const SideBar = () => {
  return (
    <div className="relative max-w-[300px] min-w-[250px]">
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
            {mock_tag.map((item, index) => (
              <li key={index} className="bg-blue-100 text-black py-1 px-2 rounded-md font-bold cursor-pointer text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
