import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Create from "@/pages/Create";
import NotFound from "@/pages/NotFound";
import Mypage from "@/pages/Mypage";
import OAuth2 from "@/pages/Oauth2";
import Search from "@/pages/Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/new" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/OAuth2" element={<OAuth2 />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
