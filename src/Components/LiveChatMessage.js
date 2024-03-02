import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../ReduxStore/LiveChatSlice";
import { commentsGenerator, nameGenerator } from "../Utils/Helper";
import { USER_IMAGE } from "../Utils/Constants";

//This is the live chat messages that pops up.
const LiveChatMessage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.chatSlice.messages);

  useEffect(() => {
    const polling = setInterval(() => { //Setting up the polling time as 3 sec
      dispatch(
        addMessages({
          name: nameGenerator(),
          message: commentsGenerator(10), //Each comments to have a length of 10 charachters
        })
      );
    }, 3000);

    return () => {
      clearInterval(polling); //Clearing the polling interval to avoid memory overuse.
    };
  }, []);

  return (
    <div className="flex flex-col">
      {selector.map((messages) => {
        return (
          <div className="bg-gray-200 m-0.5 p-1 rounded-2xl border border-b-black shadow-lg">
            <div className="flex flex-row">
              <img src={USER_IMAGE} alt="User_image" className="h-6 w-7" />
              <span className="font-bold pr-1">{messages.name} </span>
              <span className="font-thin">{messages.message}✌🏼</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LiveChatMessage;
