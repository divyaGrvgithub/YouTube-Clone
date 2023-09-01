import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/Helper";
import {BiSolidSend} from "react-icons/bi"
import {FcBusinessman} from "react-icons/fc"

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API Polling");
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(25) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 h-[400px] border border-gray rounded-xl shadow-sm overflow-y-scroll flex flex-col-reverse">
        {
          // Disclaimer : Dont use indexs as key
          chatMessages.map((c, i) => (
            <ChatMessages key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form className="mt-5 mb-5 flex"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("gooo", liveMessage);
          dispatch(
            addMessages({
              name: "Rahul Chavan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        {/* <img
          className="h-8 ml-4"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-logo"
        /> */}
        <FcBusinessman className="h-8 text-3xl rounded-full border border-red-900 ml-4" />
        <input
          type="text"
          placeholder=" Chat..."
          className=" ml-4 mr-3 p-1 w-[21rem] rounded-lg shadow-sm border-b-4 border-indigo-300 focus:outline-0"
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
        />
        
        <button className="p-2 rounded-lg shadow-sm border border-b-3 focus:outline-0"><BiSolidSend /></button>
      </form>
    </>
  );
};

export default LiveChat;
