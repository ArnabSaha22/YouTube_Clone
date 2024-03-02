import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideoDetails } from "../ReduxStore/VideoDetailsSlice";

//This is the main video container which has all the videos. The videos are sent to the Video Card component 
//as props which handles the video cards.
const MainVideoContainer = () => {
  const dispatch = useDispatch();
  const [videoItems, setVideoItems] = useState([]);
  const getYoutubeData = async () => {
    const data = await fetch(YOUTUBE_API); //Fetching data from the youtube API.
    const json = await data.json(); //Converting the data to JSON.
    //console.log(json.items);
    setVideoItems(json.items);  //Setting the state with all the videos from the API.
    dispatch(getVideoDetails(json.items));
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
              <Link to={"/watch?v=" + items.id}>
                <VideoCard props={items} /> 
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainVideoContainer;
