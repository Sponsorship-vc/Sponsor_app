import { doc, onSnapshot,query,collection ,orderBy ,serverTimestamp } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase/config";
import {RiAccountCircleFill} from 'react-icons/ri'

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  
  useEffect(() => {

    const unsub2 = async() => {
      try {

        const ideaCollectionRef = collection(db, "userChats", currentUser.uid, "chat");
        const orderedDataRef = query(ideaCollectionRef,orderBy("date", "desc"));
        const unsubscribe = onSnapshot(orderedDataRef, (snapshot) =>  {
          const filteredData = snapshot.docs.map((doc) => doc.data());
          console.log(filteredData);
          setChats(filteredData);
        }
        )} catch (error) {
        console.log(error)
      }
    }
   currentUser.uid &&  unsub2()
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
    console.log(user)
  };
  return (
    <div className="flex flex-col h-[25rem] w-full bg-white mt-4 overflow-auto ">
      <h2 className="ml-3 text-xs text-gray-400 mb-3">Chats</h2>
      {chats && 
        chats
          .map((chat) => (
            <div
              className=" p-2 cursor-pointer border border-b flex flex-row hover:bg-gray-100  items-center w-full"
              key={chat.chatId}
              onClick={() =>handleSelect(chat)}
            >
              {/* {console.log(chat.id)} */}
              <div>
              {chat.photoURL ? (
                  <img
                    src={chat.photoURL}
                    alt="Profile"
                    className="w-7 h-7 rounded-full mb-2"
                  />
                ) : (
                  <RiAccountCircleFill size={30} />
                )}
              </div>
              <div className="ml-2">
                <span className="font-bold text-sm text-dark-blue">
                  {chat.name || 'user'}
                </span>
                <p className="text-gray-500 text-xs">{chat.lastMessage.text}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Chats;
