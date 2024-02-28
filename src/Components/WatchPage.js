import { useSelector } from "react-redux";
import SideBarExpanded from "./SideBarExpanded";
import SideBar from "./SideBar";
import { useSearchParams } from "react-router-dom";
import LikeButton from "./LikeButton";
import CurrentVideoContext from "../Utils/CurrentVideoContext";

const WatchPage = () => {
  const selector = useSelector((store) => store.sideBar.showSideBar);
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const selector2 = useSelector((store) => store.videoSlice.videoList[0]);
  const selectedVideo = selector2.filter(
    (videos) => videos.id === searchParams.get("v")
  );

  return (
    <CurrentVideoContext.Provider value={{ currentVideo: selectedVideo }}>
      <div className="flex flex-row">
        {selector ? <SideBarExpanded /> : <SideBar />}
        <div className="pl-5 flex flex-col">
          <iframe
            className="rounded-2xl"
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <LikeButton />
        </div>
      </div>
    </CurrentVideoContext.Provider>
  );
};

export default WatchPage;

/**
 * 
 *         <div className="flex flex-row items-end justify-end">
          <button className="">Like</button>
          <button className="pl-3">Dislike</button>
        </div>
 */
