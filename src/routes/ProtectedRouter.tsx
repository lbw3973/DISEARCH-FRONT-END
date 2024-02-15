import { useUserLoginStatusStore } from "@/stores/userLoginStatus";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRouter() {
  const { status } = useUserLoginStatusStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!status) {
      alert("로그인이 필요합니다.");
      navigate("/boards/1");
    }
  }, []);

  return !status ? null : <Outlet />;
}

export default ProtectedRouter;
