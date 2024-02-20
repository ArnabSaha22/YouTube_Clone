import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/Constants";
import VideoCard from "./VideoCard";

const MainVideoContainer = () => {
  const [videoItems, setVideoItems] = useState([]);
  const getYoutubeData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log(json.items[0]);
    setVideoItems(json.items);
    if (videoItems.length === 0) return;
  };

  useEffect(() => {
    getYoutubeData();
  }, []);

  return (
    <div className="m-7">
      <ul className="flex flex-wrap">
        {videoItems.map((items) => {
          return (
            <li
              key={items.id}
              className="m-2 cursor-pointer hover:bg-gray-300 rounded-xl transform transition duration-500 hover:scale-110"
            >
              <VideoCard props={items} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainVideoContainer;
