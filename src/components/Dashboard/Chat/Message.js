import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${
        message.senderId === currentUser.uid ? "flex justify-end" : "flex justify-start"
      } gap-3 mb-3 overflow-auto max-h-100`}
    >
      <div
        className={`flex flex-col gap-3 ${
          message.senderId === currentUser.uid
            ? "items-end bg-[#4D44B5] rounded-l-lg rounded-br-lg text-white min-w-min h-auto"
            : "items-start bg-gray-300 rounded-bl-lg rounded-r-lg min-w-min max-w-10 "
        } text-xs`}
      >
        <p className="whitespace-normal p-3 break-words max-w-[15rem]  ">{message.text}</p>

        {message.img && <img src={message.img} alt="" className="w-1/2" />}
      </div>
    </div>
  );
};

export default Message;
