import React from "react";
import SideBarOptions from "../Utils/SIdeBarOptions";
import { Link } from "react-router-dom";

//This is the sidebar component which is one of the toggled option on sidebar
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
              {items.title === "Home" ? (
                <div>
                  <Link to="/">
                    <img
                      src={items.icon}
                      alt={items.title}
                      className="h-10 w-10"
                    />
                    <span className="">{items.title}</span>
                  </Link>
                </div>
              ) : (
                <div>
                  <img
                    src={items.icon}
                    alt={items.title}
                    className="h-10 w-10"
                  />
                  <span className="">{items.title}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
