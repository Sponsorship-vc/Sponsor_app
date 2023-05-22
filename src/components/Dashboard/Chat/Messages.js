import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../../../context/ChatContext";
import { db} from "../../../firebase/config";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  // Sort messages by date in ascending order
  const sortedMessages = messages && messages.length > 0 ? messages.sort((a, b) => a.date - b.date) : [];

  return (
    <div className="p-[10px] h-full w-full overflow-scroll">
      {sortedMessages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
