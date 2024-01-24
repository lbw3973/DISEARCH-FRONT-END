import ContentItem from "../ContentItem";

interface Content {
  channelName: string;
  img: string;
  category: string;
  tag: string[];
  content: string;
}

const mock_Contents: Content[] = [
  {
    channelName: "협업파티1111",
    img: "/public/temp.png",
    category: "기술",
    tag: ["게임", "친목", "수다", "종합게임", "배틀그라운드"],
    content:
      "포차 컨셉으로 만들어진 커뮤니티 친목 서버 입니다.\n친구를 구한다거나 고민 털어놓고 싶거나 게임 같이 할 사람구하거나 등등 편하게 입장 해 주세요.\n⭕️ 이런 사람을 원해요 ⭕\n️• 함께 어울리며 즐겁게 놀사람\n• 게임하는 사람\n• 재밌는 사람\n\n❌ 이런 사람은 원치 않아요 ❌\n• 여미새 / 남미새\n• 욕쟁이\n• 악의적인 목적을 가지고 서버 입장하는 사람\n",
  },
  {
    channelName: "협업파티1111",
    img: "/public/temp.png",
    category: "기술",
    tag: ["게임", "리그오브레전드", "친목", "수다", "핫플"],
    content:
      "포차 컨셉으로 만들어진 커뮤니티 친목 람을 원해요 ⭕\n️• 함께 어울리며 즐겁게치 않아요 ❌\n\n• 여미새 / 남미새\n• 욕쟁이\n• 악의적인 목적을 가지고 서버 입장하는 사람\n",
  },
  {
    channelName: "협업파티2222",
    img: "/public/temp.png",
    category: "기술",
    tag: ["배틀그라운드", "호이4", "콯", "컴오히", "스디2"],
    content:
      "포차 컨셉으로 만들어진 커뮤 입니다.\n친구를 구한다거나 고편하게 입장 해 주세요.\n⭕️ 이런 사람을 원해요 ⭕\n️• 함께 어울리며 즐겁게 놀사람\n• 게임하는 사람\n• 재밌는 사람\n\n❌ 이런 사람은 원치 않아요 ❌\n\n• 여미새 / 남미새\n• 욕쟁이\n• 악의적인 목적을 가지고 서버 입장하는 사람\n",
  },
  {
    channelName: "협업파티3333",
    img: "/public/temp.png",
    category: "기술",
    tag: ["게임", "리그오브레전드", "친목", "노래", "수다"],
    content:
      "포차 컨셉으로 만들어진 커뮤니티 친목 서버 입니다.\n친구를 구한다거나 고민 털어놓고 싶거나 게임 같이 할 사람구하거나 등등 편하게 입장 해 주세요.\n⭕️ 이런 사람을요 ⭕\n️• 함께 어울리며 즐겁게 놀사람\n• 게임하는 사람\n• 재밌는 사람\n\n❌ 이런 사람은 원치 않아요 ❌\n\n• 여미새 / 남미새\n• 욕쟁이\n• 악의적인 목적을 가지고 서버 입장하는 사람\n",
  },
  {
    channelName: "협업파티4444",
    img: "/public/temp.png",
    category: "기술",
    tag: ["소통", "배틀그라운드", "카트라이더", "우결서버", "구인증"],
    content:
      "포차 컨셉으로 만들어진 커뮤니티 친목 서버 입니다.\n친구를 구한다거나 고민 털어놓고 싶거나 게임 같이 할 사람구하거나 등등 편하게 입장 해 주세요.\n⭕️ 이런 사어울리며 즐겁게 놀사람\n• 게임하는 사람\n• 재밌는 사람\n\n❌ 이런 사람은 원치 않아요 ❌\n\n• 여미새 / 남미새\n• 욕쟁이\n• 악의적인 목적을 가지고 서버 입장하는 사람\n",
  },
];

const ContentList = () => {
  return (
    <div className="flex flex-wrap mx-auto px-4 font-Pretendard justify-center md:justify-normal w-full">
      {mock_Contents.map((content, index) => (
        <ContentItem content={content} key={index} />
      ))}
    </div>
  );
};

export default ContentList;
