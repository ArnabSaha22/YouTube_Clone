import React from "react";
import { ScrollOptionsList } from "../Utils/Constants";

const ScrollOptions = () => {
  return (
    <div className="">
      <ul className="flex flex-row ml-5">
        {ScrollOptionsList.map((items, index) => (
          <li
            key={index}
            className="m-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white hover:rounded-lg px-1"
          >
            <span>{items}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollOptions;
