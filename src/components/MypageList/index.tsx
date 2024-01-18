import React from "react";

const MypageList = () => {
  return (
    <div className="w-[1000px] flex flex-col gap-10">
      <div>
        <div className="border-b-2 border-solid ">
          <h1 className="text-3xl font-bold p-3">내 서버</h1>
        </div>
        <button className="w-[180px] h-14 bg-[#7289da] rounded-lg text-2xl mt-5">+ 서버 추가</button>
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
