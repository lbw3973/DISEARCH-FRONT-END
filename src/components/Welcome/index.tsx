import { useState } from "react";
import Typing from "react-kr-typing-anim";
import { Link } from "react-router-dom";
import "@/styles/button.scss";
import { useUserLoginStatusStore } from "@/stores/userLoginStatus";
import { loginURL } from "@/util/loginURL";

const Typing_Headers = [
  ["환영합니다!👋", "🎉원하는 Discord 서버에 참가해보세요!🎉"],
  ["원하는 서버가 없다면, 직접 만들어보는건 어떨까요?🧡", "Discord 게임 커뮤니티에 오신 것을 환영합니다!😁"],
  ["🧡여기서 새로운 친구들을 만나보세요!", "게임을 좋아하시나요?🔫 같은 취향을 가진 사람들과 함께 즐겨보세요~"],
  ["여기에 당신이 찾던 딱 맞는 서버가 있을지도 몰라요!🎧", "서로를 돕고 함께 성장하는 게임 커뮤니티에 참여해보세요!🚀"],
  [
    "🎢혼자보다는 친목도모와 함께 즐거운 게임 시간을 보내보세요!🎢",
    "당신의 게임 경험을 공유하고, 다른 사람들의 이야기를 듣는것도 중요합니다!🦻",
  ],
  ["📢이곳에서 당신의 새로운 게임 파트너를 찾아보세요!🎮", "같은 관심사를 가진 사람들과 함께하는 시간은 어떨까요?🚿"],
];

const TYPING_POST_DELAY = 500;
const TYPING_SPEED = 30;

const Welcome = () => {
  const random = Math.random() * (Typing_Headers.length - 1 - 0);
  const [currentIndex, setCurrentIndex] = useState(false);
  const [nextIndex, setNextIndex] = useState(Math.round(random));

  const handleSetCurrentIndex = () => {
    setCurrentIndex(!currentIndex);
  };
  const handleSetNextIndex = () => {
    setNextIndex(nextIndex === Typing_Headers.length - 1 ? 0 : nextIndex + 1);
    setTimeout(() => {
      setCurrentIndex(!currentIndex);
    }, TYPING_POST_DELAY);
  };

  const { status } = useUserLoginStatusStore();

  return (
    <div className="flex justify-evenly items-center flex-col px-4 mb-10 font-Pretendard">
      <Link to={status ? "/new" : loginURL} className="text-4xl p-4 rounded-md">
        <button className="CreateButton">
          <div>
            <span>서</span>
            <span>버</span>
            <span>&nbsp;</span>
            <span>추</span>
            <span>가</span>
            <span>하</span>
            <span>기</span>
          </div>
        </button>
      </Link>
      <div className="text-center md:text-2xl h-20 mt-10 flex flex-col gap-5 text-base break-keep drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
        <Typing
          Tag="h2"
          preDelay={500}
          postDelay={TYPING_POST_DELAY}
          speed={TYPING_SPEED}
          str={Typing_Headers[nextIndex][0]}
          onDone={handleSetCurrentIndex}
        />
        {currentIndex && (
          <Typing
            Tag="h2"
            preDelay={500}
            postDelay={TYPING_POST_DELAY}
            speed={TYPING_SPEED}
            str={Typing_Headers[nextIndex][1]}
            onDone={handleSetNextIndex}
          />
        )}
      </div>
    </div>
  );
};

export default Welcome;
