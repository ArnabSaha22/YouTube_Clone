import React from "react";
import SideBarOptions from "../Utils/SIdeBarOptions";

const SideBar = () => {
  return (
    <div className="w-36">
      <ul>
        {SideBarOptions.map((items) => {
          return (
            <li
              key={items.title}
              className="ml-2 m-5 p-2 cursor-pointer hover:bg-gray-200 rounded-xl hover:text-white"
            >
              <img src={items.icon} alt={items.title} className="h-10 w-10" />
              <span className="">{items.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
