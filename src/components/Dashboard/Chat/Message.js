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
        message.senderId === currentUser.uid ? "flex-row-reverse" : "flex"
      } gap-3 mb-3 overflow-auto max-h-100 max-w-80`}
    >
      <div className="flex flex-col text-gray-700">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <span>just now</span>
      </div>
      <div
        className={`flex flex-col gap-3 items-end ${
          message.senderId === currentUser.uid
            ? "bg-[#4D44B5] rounded-l-lg rounded-br-lg text-white"
            : "bg-gray-300 rounded-bl-lg rounded-r-lg"
        } max-w-full`}
      >
            <p
              className={`${
                message.senderId === currentUser.uid
                  ? "bg-[#4D44B5] rounded-l-lg rounded-br-lg max-w-max text-white"
                  : "bg-gray-300 rounded-bl-lg rounded-r-lg max-w-max"
              } whitespace-normal`}
            >
              {message.text}
            </p>

        {message.img && <img src={message.img} alt="" className="w-1/2" />}
      </div>
    </div>
  );
};

export default Message;
