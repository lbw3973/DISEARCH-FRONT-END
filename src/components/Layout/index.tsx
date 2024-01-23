import { Outlet } from "react-router-dom";
import Header from "../Header";
import ScrollTopPageMove from "../Common/ScrollTopPageMove";

const Layout = () => {
  return (
    <main>
      <Header />
      <div className="pt-[120px]">
        <Outlet />
      </div>
      <ScrollTopPageMove />
    </main>
  );
};

export default Layout;
