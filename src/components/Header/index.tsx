import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { getCookie, removeCookie } from "@/util/cookie";
import { useUserLoginStatusStore } from "@/stores/userLoginStatus";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";

import { getTags } from "@/apis/server";
import { ITags } from "@/types/server";
import { useQuery } from "@tanstack/react-query";
const loginURL = `https://discord.com/api/oauth2/authorize?scope=identify+email+guilds+guilds.join&response_type=code&client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&redirect_uri=http://localhost:5173/OAuth2`;

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLogined, setIsLogined] = useState(true);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const { status, setStatus } = useUserLoginStatusStore();
  const navigate = useNavigate();

  const { userInfo } = useGetUserInfo();

  const [searchtext, setSearchText] = useState("");
  const { data: tags } = useQuery<ITags[]>({ queryKey: ["tags"], queryFn: getTags });

  useEffect(() => {
    if (getCookie("Disearch_access_token")) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [status]);

  const logout = () => {
    navigate("/");
    setIsProfileClicked(!isProfileClicked);
    removeCookie("Disearch_access_token");
    setIsLogined(false);
    setStatus(false);
  };

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    console.log(searchtext);
  };

  const searchData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tags);
  };

  return (
    <header className=" bg-[#313338] w-full h-[100px] fixed shadow-md z-20 flex items-center">
      <div className="flex items-center justify-between w-full md:px-10 p-0">
        <div className="w-[170px] cursor-pointer" onClick={() => navigate("/")}>
          <img src="/DISEARCH.gif" alt="로고" className="w-[150px]" />
        </div>
        <form className="relative lg:w-[440px] sm:w-[330px] xs:w-[240px]" onSubmit={searchData}>
          <div className="flex h-12">
            {isHovered ? <IoIosSearch className="absolute top-1/2 left-2 -translate-y-1/2 z-10" size={20} /> : ""}
            <input
              type="text"
              className={`relative  w-full h-full rounded-l-xl bg-[#313338] border border-[#5b6066] text-white  outline-1 outline-gray-900 ${isHovered ? "pl-10" : "pl-3"}`}
              placeholder="검색"
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              onChange={changeText}
            ></input>
            <button className="bg-[#282b30] text-white border border-[#5b6066] border-l-0 h-full rounded-l-none rounded-r-xl w-1/6 flex items-center justify-center">
              <IoIosSearch className="z-10" size={20} />
            </button>
          </div>
        </form>
        <div>
          {isLogined ? (
            <div className="relative font-Pretendard">
              <button className="flex items-center" onClick={() => setIsProfileClicked(!isProfileClicked)}>
                <img src="/discord.png" alt="디스코드로고" width={70} />
                <p className="mr-1 hidden md:block">{userInfo && userInfo.username}</p>
                {isProfileClicked ? (
                  <FaCaretUp className="hidden md:block" />
                ) : (
                  <FaCaretDown className="hidden md:block" />
                )}
              </button>
              {isProfileClicked ? (
                <div className="absolute top-[60px] right-0 bg-gray-500 whitespace-nowrap p-2 rounded-md">
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
