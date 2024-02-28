import React from "react";
import { HeartIcon } from "../Utils/Icons";
import { useContext } from "react";
import CurrentVideoContext from "../Utils/CurrentVideoContext";

const LikeButton = () => {
  const data = useContext(CurrentVideoContext);
  const likeDetails = (
    data.currentVideo[0]?.statistics?.likeCount / 1_000
  ).toFixed(1);
  console.log(likeDetails);

  return (
    <div className="h-screen items-end justify-end">
      <div
        className="mt-5 flex flex-row cursor-pointer w-16 pt-0.5 h-8 rounded-xl hover:bg-red-500"
        onClick={() => console.log("Hello")}
      >
        <HeartIcon />
        <span className="font-serif hover:text-white">Like</span>
      </div>
      <span className="font-thin text-sm">{likeDetails}K</span>
    </div>
  );
};

export default LikeButton;
