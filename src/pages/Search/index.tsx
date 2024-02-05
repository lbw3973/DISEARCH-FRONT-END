import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (type !== "category" && type !== "tag") {
      navigate("/notfound");
    }
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      <Outlet />
    </div>
  );
};

export default Search;
