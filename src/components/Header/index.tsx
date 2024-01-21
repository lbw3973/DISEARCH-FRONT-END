import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className=" bg-[#313338] w-full h-[120px]">
      <div className="flex items-center justify-between w-full h-[90px] px-5">
        <div className="w-[170px]">
          <img src="/logo.png" alt="로고" />
        </div>
        <form className="relative lg:w-[440px]">
          <div className="flex h-10">
            {isHovered ? <IoIosSearch className="absolute top-1/2 left-2 -translate-y-1/2 z-10" size={20} /> : ""}
            <input
              type="text"
              className={`relative  w-full h-full rounded-l-xl bg-[#313338] border border-[#424549] text-white  outline-1 outline-gray-900 ${isHovered ? "pl-10" : "pl-3"}`}
              placeholder="검색"
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
            ></input>
            <button className="bg-[#282b30] text-white border border-[#424549] border-l-0 h-full rounded-l-none rounded-r-xl w-1/6 flex items-center justify-center">
              <IoIosSearch className="z-10" size={20} />
            </button>
          </div>
        </form>
        <div className="w-[170px]  flex items-center justify-center">
          <button className="bg-gray-500 w-[120px] flex justify-center rounded-xl">
            <img src="/discord.png" alt="discord" className="w-[70px] -ml-5" />
            <span className="text-center h-[50px] leading-[50px] -ml-3">로그인</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
