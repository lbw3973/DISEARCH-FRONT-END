import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRouter() {
  const { userInfo } = useGetUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      alert("로그인이 필요합니다.");
      navigate("/");
    }
  }, []);

  return !userInfo ? null : <Outlet />;
}

export default ProtectedRouter;
