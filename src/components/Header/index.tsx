import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { getCookie, removeCookie } from "@/util/cookie";
import { useUserLoginStatusStore } from "@/stores/userLoginStatus";
const loginURL = `https://discord.com/api/oauth2/authorize?scope=identify+email+guilds+guilds.join&response_type=code&client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&redirect_uri=http://localhost:5173/OAuth2`;

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState(true);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const { status, setStatus } = useUserLoginStatusStore();
  useEffect(() => {
    if (getCookie("Disearch_access_token")) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [status]);
  useEffect(() => {}, [isLogined]);

  const logout = () => {
    navigate("/");
    setIsProfileClicked(!isProfileClicked);
    removeCookie("Disearch_access_token");
    setIsLogined(false);
    setStatus(false);
  };

  return (
    <header className=" bg-[#313338] w-full h-[100px] fixed shadow-md z-20">
      <div className="flex items-center justify-between w-full h-[90px] px-5">
        <div className="w-[170px] cursor-pointer" onClick={() => navigate("/")}>
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
        <div>
          {isLogined ? (
            <div className="relative">
              <button className="flex items-center" onClick={() => setIsProfileClicked(!isProfileClicked)}>
                <img src="/discord.png" alt="디스코드로고" width={70} />
                {isProfileClicked ? <FaCaretUp /> : <FaCaretDown />}
              </button>
              {isProfileClicked ? (
                <div className="absolute top-[60px] left-0 bg-gray-500 whitespace-nowrap p-2 rounded-md">
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
