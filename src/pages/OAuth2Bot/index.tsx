import { postBoard } from "@/apis/server";
import { useCreateDataStore } from "@/stores/useCreateData";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const OAuth2Bot = () => {
  const navigate = useNavigate();
  const { createData, resetCreateData } = useCreateDataStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    const post = async () => {
      const res = await postBoard(createData);
      resetCreateData();
      if (res.status === 200) {
        alert("서버가 추가되었습니다!");
      } else {
        alert("에러가 발생했습니다.\n다시 시도해주세요.");
      }
    };

    if (code) {
      post();
      navigate("/mypage");
    } else if (error) {
      resetCreateData();
      alert("error 발생");
      navigate("/boards/1");
    }
  }, []);

  return null;
};

export default OAuth2Bot;
