import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase/config";

const Chats = () => {
  const [chats, setChats] = useState({});

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() || {});
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (userInfo) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  return (
    <div className="flex flex-col h-[25rem] w-[15rem] bg-white mt-4">
      <h2 className="ml-3 text-xs text-gray-400 mb-3">Chats</h2>
      {Object.entries(chats)
        .sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="p-2 cursor-pointer border border-b flex flex-row hover:bg-gray-100"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full mb-2"
            />
            <div className="ml-2">
              <span className="font-bold text-sm text-dark-blue">
                {chat[1].userInfo.name}
              </span>
              <p className="text-gray-500 text-xs">
                {chat[1]?.lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
