import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import ScrollTopPageMove from "../Common/ScrollTopPageMove";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/" && navigate("/boards/1");
  }, []);

  return (
    <main>
      <Header />
      <div className="pt-[118px]">
        <Outlet />
      </div>
      <ScrollTopPageMove />
    </main>
  );
};

export default Layout;
