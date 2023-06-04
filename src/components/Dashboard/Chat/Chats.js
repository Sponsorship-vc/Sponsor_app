import { doc, onSnapshot,query,collection ,orderBy ,getDocs} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase/config";
import pfp from "../../../Assets/Dashboard/pfp.jpg";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  
  useEffect(() => {
  const getChats = () => {
  
    const unsub2 = async() => {
      try {

        const ideaCollectionRef = collection(db, "userChats", currentUser.uid, 'chat')
        const data = await getDocs(ideaCollectionRef);
        const filteredData = data.docs.map((doc) => {doc.data()})
        setChats(filteredData)
        console.log(filteredData)
      } catch (error) {
        console.log(error)
      }
    }
    unsub2()
  };
  
  currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="flex flex-col h-[25rem] w-[15rem] bg-white mt-4">
      <h2 className="ml-3 text-xs text-gray-400 mb-3">Chats</h2>
      {chats &&  
        chats
          .map((chat) => (
            <div
              className="p-2 cursor-pointer border border-b flex flex-row hover:bg-gray-100"
              key={chat.chatId}
              onClick={() => handleSelect(chat.id)}
            >
              <img
                src={chat.photoURL || pfp}
                alt="Profile"
                className="w-10 h-10 rounded-full mb-2"
              />
              <div className="ml-2">
                <span className="font-bold text-sm text-dark-blue">
                  {chat.uid}
                </span>
                <p className="text-gray-500 text-xs">{chat.lastMessage.text}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Chats;
