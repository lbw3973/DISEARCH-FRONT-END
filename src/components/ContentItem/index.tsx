interface Content {
  channelName: string;
  img: string;
  category: string;
  tag: string[];
  content: string;
}

const ContentItem = ({ content }: { content: Content }) => {
  return (
    <div className="2xl:w-1/3 lg:w-1/2 md:w-full min-w-[350px] p-3 w-full">
      <div className="bg-black h-full rounded-md">
        <div className="flex justify-between py-1 px-2 items-center bg-gray-700 rounded-t-md">
          <h2 className="text-xl">{content.channelName}</h2>
          <span className="text-xs">1분 전</span>
        </div>
        <div className="flex justify-between items-center gap-4 pr-2">
          <img src="https://picsum.photos/66/66" alt="Server_Icon" className="w-[66px] h-[66px]" />
          <div className="flex flex-col gap-2 justify-start items-start w-full whitespace-nowrap">
            <span className="bg-[#424549] rounded-md px-1">{content.category}</span>
            <div className="flex gap-2 flex-wrap">
              {content.tag.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#dbeafe] rounded-md px-1 text-black font-bold cursor-pointer hover:bg-[#7bcace] duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="bg-[#7289da] h-1/2 whitespace-nowrap rounded-md p-2 hover:bg-[#5865f2] duration-300">
            서버 참가하기
          </button>
        </div>
        <div className="w-11/12 h-px bg-white mx-auto my-3"></div>
        <div className="px-2">
          {content.content
            .split("\n")
            .map((sentence, index) => (sentence === "" ? <br key={index} /> : <p key={index}>{sentence}</p>))}
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
