import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../../context/ChatContext";
import pfp from '../../../Assets/Dashboard/pfp.jpg'

const Chat = () => {
const {data} = useContext(ChatContext);

  return (
    <div className="flex flex-1 flex-col">
      <div className="h-[50px] flex items-center p-[10px] text-dark-blue w-full flex- gap-3 mt-3  border-b border-slate-200">
        <img src={data.user?.photoURL} alt="your pic " className="rounded-full h-8 w-8"/>
        <span className="font-bold ">{data.user?.name}</span> 
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
