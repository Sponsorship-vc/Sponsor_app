import React, { useContext, useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase/config";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const chatRef = collection(db, "chats", data.chatId, "messages");
    const messagesQuery = query(chatRef, orderBy("date"));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(updatedMessages);
    });

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  return (
    <div className="p-[10px] h-full overflow-auto overflow-x-hidden ">
      {messages && messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );  
};

export default Messages;
