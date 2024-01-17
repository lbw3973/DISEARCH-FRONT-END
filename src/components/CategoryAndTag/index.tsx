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

const CategoryAndTag = () => {
  return (
    <div className="flex justify-center whitespace-nowrap px-[1.5rem] lg:max-w-[1000px] md:max-w-[720px] sm:max-w-[420px] xs:min-w-[280px] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex md:flex-row gap-5 items-center flex-col">
          <h4 className="text-2xl border-b-[4px] border-solid pb-0.5 px-2">카테고리</h4>
          <ul className="flex gap-4 xs:flex-wrap min-w-[320px]">
            {category.category.map((item, index) => (
              <li key={index} className="bg-green-200 text-black py-1 px-2 rounded-md font-bold cursor-pointer text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <h4 className="text-2xl border-b-[4px] border-solid pb-0.5 px-1">인기 태그</h4>
          <ul className="flex gap-2 flex-wrap min-w-[320px]">
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

export default CategoryAndTag;
