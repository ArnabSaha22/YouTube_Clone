import React from "react";

//This component is for a single video card which is later iterated in the main video container.
const VideoCard = ({ props }) => {
  if (!props) return;

  return (
    <div className="w-72 flex flex-col">
      <img
        src={props?.snippet?.thumbnails?.high?.url}
        alt="Video Thumbnail"
        className="h-52 w-72 rounded-2xl"
      />
      <span className="font-serif text-sm pl-1">{props?.snippet?.title}</span>
      <span className="font-thin text-xs pl-1">{props?.snippet?.channelTitle}</span>
      <span className="font-thin text-xs pl-1">
        {(props?.statistics?.viewCount / 1_000_000).toFixed(1)}M views
      </span>
    </div>
  );
};

export default VideoCard;
