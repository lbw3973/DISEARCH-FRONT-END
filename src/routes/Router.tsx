import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Create from "@/pages/Create";
import NotFound from "@/pages/NotFound";
import Mypage from "@/pages/Mypage";
import OAuth2Bot from "@/pages/OAuth2Bot";
import Search from "@/pages/Search";
import Type from "@/pages/Search/Group";
import ProtectedRouter from "./ProtectedRouter";
import OAuth2 from "@/pages/OAuth2";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/new" element={<Create />} />
          </Route>
          <Route path="/search/:type" element={<Search />}>
            <Route path=":param" element={<Type />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
        <Route path="/OAuth2" element={<OAuth2 />} />
        <Route path="/OAuth2Bot" element={<OAuth2Bot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
