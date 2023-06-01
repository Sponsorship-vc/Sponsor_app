import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const ChatSidebar = () => {
  return (
    <div className="flex flex-2 border-r border-gray-300  flex-col">
      <Navbar />
      <Search/>
      {/* <Chats/> */}
    </div>
  );
};

export default ChatSidebar;
