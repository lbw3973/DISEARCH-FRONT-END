import React from "react";

interface Content {
  channelName: string;
  img: string;
  category: string;
  tag: string[];
  content: string;
}

const ContentItem = (content: { content: Content }) => {
  console.log(content);

  return (
    <div className="w-[33.3%] flex-none">
      <div>{content.content.channelName}</div>
    </div>
  );
};

export default ContentItem;
