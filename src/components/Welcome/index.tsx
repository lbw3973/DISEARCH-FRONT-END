import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex justify-evenly items-center flex-col px-4 mb-10">
      <Link to={"/new"} className="bg-black text-4xl p-4 rounded-md">
        참가글 작성하기
      </Link>
      <div className="text-center">
        <h2 className="text-2xl my-8 break-keep">원하는 Discord 서버에 참가해보세요!</h2>
        <h2 className="text-2xl mb-8 break-keep">두번째 줄 인사말</h2>
      </div>
    </div>
  );
};

export default Welcome;
