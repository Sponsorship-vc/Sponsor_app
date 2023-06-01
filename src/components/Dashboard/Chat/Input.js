import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { doc, serverTimestamp, updateDoc, collection, addDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase/config";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ImAttachment } from "react-icons/im";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          // Handle error
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(collection(db, "chats", data.chatId, "messages"), {
              id: uuid(),
              text,
              senderId: currentUser.uid,
              recieverId: data.user.userId,
              date: serverTimestamp(),
              img: downloadURL,
            });
          });
        }
      );
    } else {
      await addDoc(collection(db, "chats", data.chatId, "messages"), {
        id: uuid(),
        text,
        senderId: currentUser.uid,
        recieverId: data.user.userId,
        date: serverTimestamp(),
      });
    }

    // Update user chat for current user
    await setDoc(doc(db, "userChats", currentUser.uid), {
      lastMessage: {
        text,
      },
      date: serverTimestamp(),
      chatId: data.chatId,
      uid: data.user.userId,
      name: data.user.name,
      photoURL: data.user.photoURL || '',
    }, { merge: true });

    // Update user chat for the other user
    await setDoc(doc(db, "userChats", data.user.userId), {
      lastMessage: {
        text,
      },
      date: serverTimestamp(),
      chatId: data.chatId,
      uid: currentUser.uid,
      name: currentUser.name,
      photoURL: currentUser.photoURL || '',
    }, { merge: true });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
      setText("");
      setImg(null);
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-[20%]">
      <div className="h-[65%] w-[95%] p-[10px] flex items-center justify-between border border-gray-400 rounded-full">
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          value={text}
          className="w-full border-none outline-none text-md"
        />
        <div className="flex flex-row items-center gap-5">
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <ImAttachment fill="#A098AE" size={20} />
          </label>
          <button
            onClick={handleSend}
            className="bg-[#4D44B5] text-white text-sm rounded-full w-[5rem] h-[2.5rem]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
