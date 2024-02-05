import { IContent } from "@/types/server";
import { getPostingTime } from "@/util/parsePostringTime";
import { useEffect, useRef, useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const ContentItem = ({ content, hasJoinButton }: { content: IContent; hasJoinButton?: boolean }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [hasOpenButton, setHasOpenButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const contentBlockRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (contentBlockRef.current?.clientHeight && contentBlockRef.current?.clientHeight >= 240) {
      setHasOpenButton(true);
    }
  }, []);

  const handleClickJoin = async () => {
    // window.open()
    // const res = await testGuild();
    // console.log(res);

    console.log(getPostingTime(content.createdAt));
  };

  return (
    <div className="2xl:w-1/3 lg:w-1/2 md:w-full min-w-[350px] p-3 w-full">
      <div className="bg-[rgba(0,0,0,0.9)] rounded-md">
        <div className="flex justify-between p-3 items-center bg-gray-700 rounded-t-md">
          <h2 className="overflow-hidden md:text-xl text-ellipsis whitespace-nowrap">{content.serverName}</h2>
          <span className="text-xs whitespace-nowrap">{getPostingTime(content.createdAt)}</span>
        </div>
        <div className="flex justify-between items-center gap-4 pr-2">
          <img src="https://picsum.photos/66/66" alt="Server_Icon" className="w-[66px] h-[66px]" />
          <div className="flex flex-col gap-2 justify-start items-start w-full whitespace-nowrap py-1">
            <div className="flex justify-between items-center w-full">
              <span className="bg-[#ebcce7] rounded-md px-2 py-1 text-black font-bold text-sm h-7">
                {content.category}
              </span>
              {hasJoinButton && (
                <button
                  className="bg-[#7079d6] text-white JoinButton font-bold h-1/2 whitespace-nowrap rounded-md p-2 hover:bg-[#5865f2] duration-300"
                  onClick={handleClickJoin}
                >
                  <div>
                    <span>서</span>
                    <span>버</span>
                    <span>&nbsp;</span>
                    <span>참</span>
                    <span>가</span>
                    <span>하</span>
                    <span>기</span>
                  </div>
                </button>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {content.tag.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#f8b5a5] rounded-md px-2 py-1 text-black font-bold text-sm cursor-pointer hover:bg-[#ee9b87] hover:scale-110 duration-300"
                  onClick={() => navigate(`/search/tag/${tag}`)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-11/12 h-px bg-white mx-auto my-3"></div>
        <div className="px-2 relative pb-4">
          <div ref={contentBlockRef} className={`${isClicked ? "h-full" : "max-h-[240px]"} overflow-hidden pb-4`}>
            {content.content
              .split("\n")
              .map((sentence, index) => (sentence === "" ? <br key={index} /> : <p key={index}>{sentence}</p>))}
          </div>
          {hasOpenButton && (
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-full h-16 rounded-b-md bg-gradient-to-b from-transparent to-black cursor-pointer`}
              onClick={() => setIsClicked(!isClicked)}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              <button className={`pt-5 ${isClicked && "pb-5"} ${isHovered && "translate-y-1"} duration-300`}>
                {isClicked ? (
                  isHovered ? (
                    <SlArrowUp size={30} color="#0099ff" />
                  ) : (
                    <SlArrowUp size={30} />
                  )
                ) : isHovered ? (
                  <SlArrowDown size={30} color="#0099ff" />
                ) : (
                  <SlArrowDown size={30} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
