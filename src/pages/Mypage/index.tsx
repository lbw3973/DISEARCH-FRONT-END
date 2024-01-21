import MypageList from "@/components/MypageList";
import React from "react";
import { Outlet } from "react-router-dom";

const Mypage = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <MypageList />
    </div>
  );
};

export default Mypage;
