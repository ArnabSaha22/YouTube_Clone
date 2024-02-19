import React from "react";
import SearchBar from "./SearchBar";
import { HAMBURGER_ICON } from "../Utils/Constants";
import { YOUTUBE_ICON } from "../Utils/Constants";
import { MIC_ICON } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { showSideBarExtended } from "../ReduxStore/SideBarSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row">
      <img
        src={HAMBURGER_ICON}
        alt="Hamburger_Image"
        className="h-8 w-8 m-3 mr-5 cursor-pointer"
        onClick={() => dispatch(showSideBarExtended())}
      />
      <img
        src={YOUTUBE_ICON}
        alt="Youtube_Icon"
        className="h-8 w-10 mt-4 mr-8"
      />
      <SearchBar />
      <img
        src={MIC_ICON}
        alt="Mic_Icon"
        className="h-8 w-8 mt-4 m-5 cursor-pointer"
      />
    </div>
  );
};

export default Header;
