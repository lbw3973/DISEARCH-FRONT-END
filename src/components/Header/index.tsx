import { FormEvent, useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { getCookie, removeCookie } from "@/util/cookie";
import { useUserLoginStatusStore } from "@/stores/userLoginStatus";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { loginURL } from "@/util/redirectURL";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSearchedDataStore } from "@/stores/useSearchedData";
import "@/styles/scrollBar.scss";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLogined, setIsLogined] = useState(true);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { status, setStatus } = useUserLoginStatusStore();
  const { searchedData, setSearchedData, removeSearchedData } = useSearchedDataStore();
  const navigate = useNavigate();

  const { userInfo } = useGetUserInfo();

  useEffect(() => {
    if (getCookie("Disearch_access_token")) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [status]);

  const logout = () => {
    navigate("/boards/1");
    setIsProfileClicked(!isProfileClicked);
    removeCookie("Disearch_access_token");
    setIsLogined(false);
    setStatus(false);
  };

  const searchData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      setSearchedData(value);
      setIsHovered(false);
      navigate(`/search/tag/${value}/1`);
    }
    inputRef.current?.blur();
  };

  const clickSearchedData = (data: string) => {
    if (inputRef.current) {
      inputRef.current.value = data;
    }
    navigate(`/search/tag/${data}/1`);
  };

  const clickRemoveSearchedData = (data: string) => {
    removeSearchedData(data);
  };

  const clickHeaderImg = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    navigate("/boards/1");
  };

  return (
    <header className=" bg-[#313338] w-full h-[100px] fixed shadow-md z-20 flex items-center font-Pretendard">
      <div className="flex items-center justify-between w-full md:px-10 p-0">
        <div className="w-[170px] cursor-pointer" onClick={clickHeaderImg}>
          <img src="/DISEARCH.gif" alt="로고" className="w-[150px]" />
        </div>
        <form className="relative lg:w-[440px] sm:w-[330px] xs:w-[240px] text-sm sm:text-base" onSubmit={searchData}>
          <div className="flex h-12">
            <IoIosSearch
              className={`${isHovered ? "opacity-100" : "opacity-0"} absolute top-1/2 left-2 -translate-y-1/2 z-10 duration-300`}
              size={20}
            />
            <input
              type="text"
              className={`duration-300 relative  w-full h-full rounded-l-xl bg-[#313338] border border-[#5b6066] text-white  outline-1 outline-gray-900 ${isHovered ? "pl-10" : "pl-3"}`}
              placeholder="태그 검색"
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              ref={inputRef}
            ></input>
            <button className="bg-[#282b30] text-white border border-[#5b6066] border-l-0 h-full rounded-l-none rounded-r-xl w-1/6 flex items-center justify-center">
              <IoIosSearch className="z-10" size={20} />
            </button>
          </div>
          <div className={`absolute flex items-center w-full ${isHovered ? "h-full" : "h-0"}`}>
            <div
              className={`absolute top-[3px] left-0 w-full bg-[#374151] text-sm sm:text-base rounded-xl p-3 overflow-auto scrollbar-hide max-h-[208px] ${isHovered ? "opacity-100 max-h-[208px]" : "opacity-0 h-0"}`}
            >
              <h1 className="px-2 pb-1 text-[#ccc]">최근검색어</h1>
              <ul className={`${isHovered ? "max-h-[150px]" : "h-0"} overflow-y-scroll scrollBar`}>
                {searchedData.map((data, index) => (
                  <li
                    key={index}
                    className={`flex justify-between items-center sm:px-3 scale-y-100  leading-[52px] ${isHovered ? "h-[52px]" : "h-0"}`}
                  >
                    <h1
                      onMouseDown={() => {
                        clickSearchedData(data);
                      }}
                      className="hover:bg-slate-500 w-full cursor-pointer rounded-xl pl-2 duration-300 whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      {data}
                    </h1>
                    <div
                      onMouseDown={e => e.preventDefault()}
                      onClick={() => clickRemoveSearchedData(data)}
                      className="hover:bg-slate-500 w-10 h-full flex justify-center items-center cursor-pointer rounded-xl duration-300"
                    >
                      <RiDeleteBin6Line className="w-5 sm:w-6 sm:h-full" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>
        <div>
          {isLogined ? (
            <div className="relative font-Pretendard">
              <button className="flex items-center" onClick={() => setIsProfileClicked(!isProfileClicked)}>
                <img src="/discord.png" alt="디스코드로고" width={50} />
                <p className="mr-1 hidden md:block">{userInfo && userInfo.username}</p>
                {isProfileClicked ? (
                  <FaCaretUp className="hidden md:block" />
                ) : (
                  <FaCaretDown className="hidden md:block" />
                )}
              </button>
              {isProfileClicked ? (
                <div className="absolute top-[60px] sm:right-0 right-2 bg-gray-500 whitespace-nowrap p-2 rounded-md">
                  <ul className="flex flex-col gap-1 items-center justify-center ">
                    <li
                      className="h-7 text-sm leading-7 cursor-pointer"
                      onClick={() => {
                        navigate("/mypage");
                        setIsProfileClicked(!isProfileClicked);
                      }}
                    >
                      마이페이지
                    </li>
                    <div className="w-full border-b border-solid"></div>
                    <li className="h-7 leading-7 text-sm cursor-pointer" onClick={logout}>
                      로그아웃
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <Link to={loginURL} className="flex sm:text-base text-sm cursor-pointer">
              <img src="/discord.png" alt="디스코드로고" width={70} />
              <span className="text-center h-[50px] leading-[50px] hidden whitespace-nowrap md:inline">로그인</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
