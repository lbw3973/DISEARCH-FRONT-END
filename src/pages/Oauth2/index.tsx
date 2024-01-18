import { useUserGuildsStore } from "@/store/userGuildsStore";
import { useUserInfoStore } from "@/store/userInfo";
import { IUserGuildsInfo, IUserInfo } from "@/types/discord";
import { setCookie } from "@/util/cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OAuth2 = () => {
  const [isMount, setIsMount] = useState(false);
  const { setUserInfo } = useUserInfoStore();
  const { setUserGuildsInfo } = useUserGuildsStore();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    if (!isMount) {
      setIsMount(true);
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
    data.append("redirect_uri", "http://localhost:5173/OAuth2");
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
    await getUserInfo(responseData.access_token);
    await getUserGuildsInfo(responseData.access_token);
    navigate("/");
  };

  const getUserInfo = async (accessToken: string) => {
    const response = await fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    const user = await response.json();
    const _userInfo: IUserInfo = { id: user.id, email: user.email, name: user.global_name, nickName: user.username };
    setUserInfo(_userInfo);
  };

  const getUserGuildsInfo = async (accessToken: string) => {
    const reponse = await fetch("https://discord.com/api/users/@me/guilds", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    const userGuilds: any[] = await reponse.json();
    const _userGuildsInfo: IUserGuildsInfo[] = userGuilds.filter((userGuild: any) => {
      return userGuild.owner === true;
    });
    setUserGuildsInfo(_userGuildsInfo);
  };

  return null;
};

export default OAuth2;
