import React from "react";
import SideBarOptions from "../Utils/SIdeBarOptions";
import SideBarExpandedOptions from "../Utils/SideBarExpandedOptions";
import { GREYLINE_IMG } from "../Utils/Constants";
const SideBarExpanded = () => {
  return (
    <div className="w-44">
      <ul>
        {SideBarOptions.map((items) => {
          return (
            <li
              className="flex flex-row m-2 p-2 hover:bg-gray-300 hover:text-white hover:rounded-xl cursor-pointer"
              key={items.title}
            >
              <img
                src={items.icon}
                alt={items.title}
                className="h-10 w-12 pr-2"
              />
              <span>{items.title}</span>
            </li>
          );
        })}
      </ul>
      <img src={GREYLINE_IMG} alt="Grey Line" className="h-10 w-40" />
      <ul>
        {SideBarExpandedOptions.map((items) => {
          return (
            <li
              className="flex flex-row m-2 p-2 hover:bg-gray-300 hover:rounded-xl hover:text-white cursor-pointer"
              key={items.title}
            >
              <img
                src={items.icon}
                alt={items.title}
                className="h-10 w-12 pr-2"
              />
              <span>{items.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarExpanded;

//className="h-10 w-12 pr-2"
