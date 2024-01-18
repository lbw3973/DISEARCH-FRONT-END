import React from "react";

interface Content {
  channelName: string;
  img: string;
  category: string;
  tag: string[];
  content: string;
}

const ContentItem = (content: { content: Content }) => {
  return (
    <div className="w-[33.3%] flex-none h-[1000px]">
      <div>{content.content.channelName}</div>
    </div>
  );
};

export default ContentItem;
