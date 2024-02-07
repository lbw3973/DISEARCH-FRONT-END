import { useEffect } from "react";
import { useNavigate } from "react-router";

const OAuth2Bot = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    if (code) {
      navigate("/mypage");
    } else if (error) {
      alert("error 발생");
      navigate("/");
    }
  }, []);

  return <div>index</div>;
};

export default OAuth2Bot;
