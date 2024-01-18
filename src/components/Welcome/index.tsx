import { MouseEvent } from "react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

const Welcome = () => {
  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputEl = e.currentTarget.firstChild as HTMLInputElement;
    console.log(inputEl.value);
    inputEl.value = "";
  };
  return (
    <div className="h-[50vh] flex justify-center items-center flex-col px-4">
      <div className="text-center">
        <h1 className="text-5xl mb-10">DISEARCH</h1>
        <h2 className="text-2xl mb-8 break-keep">원하는 Discord 서버에 참가해보세요!</h2>
        <form className="relative h-10 mb-8 lg:w-[440px]" onSubmit={handleSubmit}>
          <input type="text" className="w-full h-full rounded-lg text-black pl-10" />
          <FcSearch className="absolute top-1/2 left-2 -translate-y-1/2" size={20} />
          <button className="bg-black absolute right-0 h-full rounded-r-[7px] w-1/6 text-center">검색</button>
        </form>
        <div className="w-full flex justify-end">
          <Link to={"/new"} className="bg-black text-sm py-1 px-2 rounded-md">
            참가글 작성하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
