import { NavLink } from "react-router-dom";

const MypageList = () => {
  return (
    <div className="w-[1200px] flex flex-col gap-10">
      <div>
        <div className="border-b-2 border-solid ">
          <h1 className="text-3xl font-bold p-3">추가한 내 서버</h1>
        </div>
        <div className="flex ">
          <div className="w-[300px] h-[200px] bg-[#424549] text-black m-5">
            <div className="flex bg-[#282b30]">
              <img src="/logo.png" alt="채널이미지" className="w-[50px]" />
              <div className="flex flex-col text-white p-2">
                <h1 className="font-bold ">DISEARCH 멤버구해요~</h1>
                <div className="flex border ">
                  <h2 className="bg-[#7289da] rounded-md px-2 mr-1">게임</h2>
                  <h2 className="bg-[#7289da] rounded-md px-2">123 인원</h2>
                </div>
              </div>
            </div>
          </div>
          <button className="w-[180px] h-14 bg-[#7289da] rounded-lg text-2xl mt-5">
            <NavLink to={"/new"}>+ 서버 추가</NavLink>
          </button>
        </div>
      </div>

      <div>
        <div className="border-b-2 border-solid ">
          <h1 className="text-3xl font-bold p-3">내 리뷰</h1>
        </div>
        <button className="w-[180px] h-14 bg-[#7289da] rounded-lg text-2xl mt-5">+ 리뷰 추가</button>
      </div>
    </div>
  );
};

export default MypageList;
