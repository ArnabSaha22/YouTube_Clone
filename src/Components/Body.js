import React from "react";
import ScrollOptions from "./ScrollOptions";
import MainVideoContainer from "./MainVideoContainer";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import SideBarExpanded from "./SideBarExpanded";

const Body = () => {
  const selector = useSelector((store) => store.sideBar.showSideBar);
  //console.log(selector)
  return (
    <div className="flex flex-row">
      {selector ? <SideBarExpanded /> : <SideBar />}
      <div className="flex flex-col">
        <ScrollOptions />
        <MainVideoContainer />
      </div>
    </div>
  );
};

export default Body;
