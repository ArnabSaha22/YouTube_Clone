import React, { useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch } from "react-redux";
import { addMessages } from "../ReduxStore/LiveChatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const submitMessage = () => {
    setLiveMessage("");
    if(!liveMessage) return
    dispatch(
      addMessages({
        name: "Arnab Saha",
        message: liveMessage,
      })
    );
  };
  return (
    <div>
      <div className="ml-2 border border-black h-[600px] w-64 rounded-2xl p-2 shadow-2xl bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <LiveChatMessage />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="mt-2 rounded-2xl w-56 mr-1 p-1 border border-black"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="bg-gray-600 text-white text-sm rounded-xl p-1 border border-black"
          onClick={() => submitMessage()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
