import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
const list = ["이승용", "이병욱", "김세진", "이승용", "이병욱", "김세진"];

const CreateForm = () => {
  const [isClicked, setIsCliked] = useState(false);
  return (
    <div className="w-[800px] h-[800px] bg-gray-400">
      <div className="flex">
        <div className="w-[100px] h-[100px]">
          <img src="" alt="서버이미지" />
        </div>
        <div className="relative w-full bg-gray-900 flex items-center">
          <div className="w-[340px] h-[52px] px-3 m-3 bg-[#333740] rounded-2xl border border-solid border-gray-400 focus-within:ring-2 focus-within:ring-[#2c62f6] transition-all duration-400">
            <button
              onClick={() => setIsCliked(!isClicked)}
              className="text-[#b1b8ca] flex items-center justify-between w-full h-full z-30"
            >
              <div className="flex gap-2">
                <img src="/discord.png" alt="" className="w-[30px] h-[24px] " />
                <h1>채널선택</h1>
              </div>
              {isClicked ? <FaCaretUp /> : <FaCaretDown />}
            </button>
          </div>
          <div
            className={`absolute top-[84px] left-3 w-[340px] h-[208px] bg-[#333740] rounded-2xl p-3 transition-all duration-500 overflow-hidden   ${isClicked ? "opacity-100 h-[208px]" : "opacity-0 h-0"}`}
          >
            <ul className={`overscroll-none h-[208px]`}>
              {list.map((name, index) => (
                <li
                  key={index}
                  className={`w[340px] h-[52px] scale-y-100 transition-all duration-500 leading-[52px] hover:bg-white  ${isClicked ? "h-52px" : "h-0"}`}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
