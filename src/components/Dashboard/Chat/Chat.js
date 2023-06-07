import React, { useContext, useEffect } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../../context/ChatContext";
import {RiAccountCircleFill} from 'react-icons/ri'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="flex flex-1 flex-col overflow-x-hidden">
      <div className="h-[50px] flex items-center p-[10px] text-dark-blue w-full flex- gap-3 mt-3  border-b border-slate-200">
        {data.photoURL ? (
                  <img
                    src={data.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mb-2"
                  />
                ) : (

                  data.user.name && <RiAccountCircleFill size={30} />
                )}
        <span className="font-bold ">{data.user?.name}</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
