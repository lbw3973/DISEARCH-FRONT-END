import { useUserLoginStatusStore } from "@/stores/userLoginStatus";
import { setCookie } from "@/util/cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let isMount = false;

const OAuth2 = () => {
  const navigate = useNavigate();
  const { setStatus } = useUserLoginStatusStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");
    console.log(code);

    if (!isMount) {
      isMount = true;
      if (code) {
        getAccessToken(code);
      } else if (error) {
        navigate("/");
      }
    }
  }, []);

  const getAccessToken = async (code: string) => {
    const data = new URLSearchParams();
    data.append("client_id", import.meta.env.VITE_DISCORD_CLIENT_ID);
    data.append("client_secret", import.meta.env.VITE_DISCORD_CLIENT_SECRET);
    data.append("grant_type", "authorization_code");
    data.append("code", code);
    data.append("redirect_uri", import.meta.env.VITE_DISCORD_REDIRECT_URL);
    data.append("scope", "identify, email");

    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });

    const responseData = await response.json();
    setCookie("Disearch_access_token", responseData.access_token);
    setStatus(true);
    navigate("/");
  };

  return null;
};

export default OAuth2;
