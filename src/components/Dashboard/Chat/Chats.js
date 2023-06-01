import { doc, onSnapshot, serverTimestamp } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase/config";
import pfp from "../../../Assets/Dashboard/pfp.jpg";

const Chats = () => {
  const [chats, setChats] = useState({});

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
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
      {Object.entries(chats) &&
        Object.entries(chats)
          .sort(([, a], [, b]) => {
            const dateA = a.date?.toDate()?.getTime();
            const dateB = b.date?.toDate()?.getTime();
            return dateB - dateA;
          }) // Sort in descending order based on timestamp
          .map(([chatId, chat]) => (
            <div
              className="p-2 cursor-pointer border border-b flex flex-row hover:bg-gray-100"
              key={chatId}
              onClick={() => handleSelect(chat.userInfo)}
            >
              <img
                src={chat?.photoURL || pfp}
                alt="Profile"
                className="w-10 h-10 rounded-full mb-2"
              />
              <div className="ml-2">
                <span className="font-bold text-sm text-dark-blue">
                  {chat?.name}
                </span>
                <p className="text-gray-500 text-xs">
                  {chat?.lastMessage?.text}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Chats;
