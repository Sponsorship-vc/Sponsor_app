import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("name", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.key === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // Check whether the group (chats in Firestore) exists; if not, create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const chatRef = doc(db, "chats", combinedId);
      const chatSnapshot = await getDoc(chatRef);

      if (!chatSnapshot.exists()) {
        // Create a chat document in chats collection
        await setDoc(chatRef, {});

        // Create the message document in the messages subcollection
        const messageRef = doc(chatRef.collection("messages"), combinedId);
        await setDoc(messageRef, {
          sender: currentUser.uid,
          recipient: user.uid,
          timestamp: serverTimestamp(),
        });

        // Create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            name: user.name,
            photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            name: currentUser.name,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className="mt-4">
      <div className="p-10 items-center flex justify-center">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="bg-transparent rounded-full outline-none w-90% border border-gray-400 h-2rem text-sm pl-4"
        />
      </div>
      {err && <span className="text-black">User not found!</span>}
      {user && Object.keys(user).length !== 0 && (
        <div
          className="p-8 flex items-center gap-3 cursor-pointer text-black flex-row bg-gray-100 w-full h-1"
          onClick={handleSelect}
        >
          <img
            src={user.photoURL}
            alt=""
            className="w-10px h-10px rounded-full object-cover"
          />
          <div className="text-black">
            <span>{user.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
