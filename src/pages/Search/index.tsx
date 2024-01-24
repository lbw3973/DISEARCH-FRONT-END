import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { group } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (group !== "category" && group !== "tag") {
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
