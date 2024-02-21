import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSideBarExtended } from "../ReduxStore/SideBarSlice";
import SideBarExpanded from "./SideBarExpanded";
import SideBar from "./SideBar";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const selector = useSelector((store) => store.sideBar.showSideBar);
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const selector2 = useSelector((store) => store.videoSlice.videoList[0]);
  console.log(selector2);

  return (
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
      </div>
    </div>
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
