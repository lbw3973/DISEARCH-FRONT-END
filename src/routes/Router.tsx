import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Create from "@/pages/Create";
import NotFound from "@/pages/NotFound";
import Mypage from "@/pages/Mypage";
import OAuth2 from "@/pages/Oauth2";
import Search from "@/pages/Search";
import Group from "@/pages/Search/Group";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/new" element={<Create />} />
          <Route path="/search/:group" element={<Search />}>
            <Route path=":id" element={<Group />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
        <Route path="/OAuth2" element={<OAuth2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
