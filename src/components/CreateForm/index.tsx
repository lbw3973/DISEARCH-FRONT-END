import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import category from "@/constants/category.json";
import { GiCancel } from "react-icons/gi";

const list = ["이승용", "이병욱", "김세진", "이승용", "이병욱", "김세진"];

const mock_tag = [
  "게임",
  "수다",
  "스팀",
  "롤",
  "소통",
  "리그오브레전드",
  "배틀그라운드",
  "발로란트",
  "스팀게임",
  "새벽",
  "대화",
];

const CreateForm = () => {
  const [isClicked, setIsCliked] = useState(false);
  const [selectedName, setSelectedName] = useState("채널선택");
  const [selectedCategory, setSelectedCategory] = useState("카테고리 선택");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [inputTag, setInputTag] = useState("");

  const clickChannel = (name: string) => {
    setIsCliked(!isClicked);
    setSelectedName(name);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const selectTag = (tag: string) => {
    if (selectedTags.length < 5 && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleInputTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(e.target.value);
  };

  const addInputTag = () => {
    if (inputTag && selectedTags.length < 5 && !selectedTags.includes(inputTag)) {
      setSelectedTags([...selectedTags, inputTag]);
      setInputTag("");
    }
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  return (
    <div className="w-[800px] h-[1100px] bg-gray-900 rounded-xl ">
      <div className="flex">
        <div className="w-[100px] h-[100px] flex justify-center items-center">
          <img src="/discord.png" alt="서버이미지" />
        </div>
        <div className="relative flex items-center rounded-xl w-full bg-gray-900">
          <div className="w-[340px] h-[52px] px-3 m-3 bg-[#333740] rounded-2xl border border-solid border-gray-400 focus-within:ring-2 focus-within:ring-[#2c62f6] transition-all duration-400">
            <button
              onClick={() => setIsCliked(!isClicked)}
              className="text-[#b1b8ca] flex items-center justify-between w-full h-full z-30"
            >
              <div className="flex gap-2">
                <img src="/discord.png" alt="" className="w-[30px] h-[24px] " />
                <h1>{selectedName}</h1>
              </div>
              {isClicked ? <FaCaretUp /> : <FaCaretDown />}
            </button>
          </div>
          <div
            className={`absolute top-[84px] left-3 w-[340px] bg-[#333740] rounded-2xl p-3 transition-all duration-500 overflow-auto scrollbar-hide  ${isClicked ? "opacity-100 h-[208px]" : "opacity-0 h-0"}`}
          >
            <ul className={`${isClicked ? "h-[208px]" : "h-0"}`}>
              {list.map((name, index) => (
                <li
                  key={index}
                  className={`w[340px] scale-y-100 transition-all duration-500 leading-[52px] hover:bg-slate-500 cursor-pointer ${isClicked ? "h-[52px]" : "h-0"}`}
                  onClick={() => clickChannel(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-[25px] mb-10 w-[750px] h border-b border-solid "></div>
      <div className="flex flex-col px-10 pb-10 gap-4">
        <div className="flex gap-5">
          <h1 className="font-bold text-xl">카테고리 </h1>
          <h2 className="bg-green-200 text-black py-1 px-2 rounded-md font-bold text-sm">{selectedCategory}</h2>
        </div>
        <ul className="flex gap-4 xs:flex-wrap min-w-[320px]">
          {category.category.map((item, index) => (
            <li
              key={index}
              className="bg-green-200 text-black py-1 px-2 rounded-md font-bold cursor-pointer text-sm"
              onClick={() => selectCategory(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col px-10 gap-4">
        <div className="flex gap-5 my-3">
          <h1 className="font-bold text-xl ">태그 </h1>
          {selectedTags.map((tag, index) => (
            <h2
              key={index}
              className="flex items-center gap-1 bg-blue-100 text-black py-1 px-2 rounded-md font-bold text-sm cursor-pointer"
              onClick={() => removeTag(tag)}
            >
              {tag}
              <GiCancel size={14} color="#ff0000" />
            </h2>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={inputTag}
            onChange={handleInputTag}
            className="w-[300px] h-[30px] bg-gray-900 border border-solid border-gray-400 focus-within:ring-2 focus-within:ring-[#2c62f6] rounded-md px-2"
            placeholder="태그 추가"
            onKeyPress={e => {
              if (e.key === "Enter") addInputTag();
            }}
          />
          <button
            className="ml-5 bg-[#333740] border border-solid border-gray-400 rounded-md px-4 py-[2px]"
            onClick={addInputTag}
          >
            추가
          </button>
        </div>
        <ul className="flex gap-2 flex-wrap min-w-[320px]">
          {mock_tag.map((item, index) => (
            <li
              key={index}
              className="bg-blue-100 text-black py-1 px-2 rounded-md font-bold cursor-pointer text-sm"
              onClick={() => selectTag(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-10">
        <div>
          <h1 className="font-bold text-xl my-10">설명</h1>
        </div>
        <div>
          <textarea spellCheck="false" className="w-full h-[400px] max-h-[450px] bg-[#333740] px-1"></textarea>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-10 border border-solid px-10 py-2 rounded-lg bg-green-500 text-gray-200 font-bold text-xl">
          저장
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
