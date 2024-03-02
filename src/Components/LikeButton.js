import React from "react";
import { useContext } from "react";
import CurrentVideoContext from "../Utils/CurrentVideoContext";

//This component extracts the video title on the watch page, will have the like button and real time video 
//like details.
const LikeButton = () => {
  const data = useContext(CurrentVideoContext); //Getting the selected video details from the context
  //console.log(data);

  const videoTitle = data.currentVideo[0]?.snippet?.localized?.title;

  return (
    <div className="flex flex-col">
      <span className="font-bold m-2 pt-2">{videoTitle}</span>
    </div>
  );
};

export default LikeButton;

