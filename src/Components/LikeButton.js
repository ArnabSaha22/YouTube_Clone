import React from "react";

import { useContext } from "react";
import CurrentVideoContext from "../Utils/CurrentVideoContext";

const LikeButton = () => {
  const data = useContext(CurrentVideoContext);
  //console.log(data);

  const videoTitle = data.currentVideo[0]?.snippet?.localized?.title;

  return (
    <div className="flex flex-col">
      <span className="font-bold m-2 pt-2">{videoTitle}</span>
    </div>
  );
};

export default LikeButton;

/**
 * import { HeartIcon } from "../Utils/Icons";
 * const likeDetails = (
    data.currentVideo[0]?.statistics?.likeCount / 1_000
  ).toFixed(1);
 * 
 *  <div
        className="mt-5 flex flex-row cursor-pointer w-16 pt-0.5 h-8 rounded-xl hover:bg-red-500"
        onClick={() => console.log("Hello")}
      >
        <HeartIcon />
        <span className="font-serif hover:text-white">Like</span>
      </div>
      <span className="font-thin text-sm">{likeDetails}K</span>
 * 
 */
