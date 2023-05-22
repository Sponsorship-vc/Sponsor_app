import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase/config"

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsubscribe = onSnapshot(doc(db, "userChats", currentUser.uid), (snapshot) => {
        const data = snapshot.data();
        if (data) {
          const sortedChats = Object.entries(data)
            .sort((a, b) => b[1].date - a[1].date)
            .map((chat) => chat[1]);
          setChats(sortedChats);
        }
      });

      return () => {
        unsubscribe();
      };
    };

    if (currentUser?.uid) {
      getChats();
    }
  }, [currentUser]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="flex flex-col h-[25rem] w-[15rem] bg-white mt-4">
      <h2 className="ml-3 text-xs text-gray-400 mb-3">Chats</h2>
      {chats.length > 0 ? (
        chats.map((chat) => (
          <div
            className="p-2 cursor-pointer border border-b flex flex-row hover:bg-gray-100"
            key={chat.userInfo.uid}
            onClick={() => handleSelect(chat.userInfo)}
          >
            <img
              src={chat.userInfo.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full mb-2"
            />
            <div className="ml-2">
              <span className="font-bold text-sm text-dark-blue">
                {chat.userInfo.displayName}
              </span>
              <p className="text-gray-500 text-xs">{chat.lastMessage?.text}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="p-2 cursor-pointer border border-b flex flex-row hover:bg-gray-100">
          <img
            src="default-profile-image.jpg"
            alt="Default Profile"
            className="w-10 h-10 rounded-full mb-2"
          />
          <div className="ml-2">
            <span className="font-bold text-sm text-dark-blue">
              No chats available
            </span>
            <p className="text-gray-500 text-xs">Start a new chat</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
