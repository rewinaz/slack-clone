import Message from "./Message";
import { collection, serverTimestamp } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { addDoc, query, where, orderBy } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../reduxHooks";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const ChatArea = (props: Props) => {
  const [user] = useAuthState(auth);
  const channelId = useAppSelector((state) => state.appReducer.roomId);
  const [message, setMessage] = useState("");
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const messagesRef = collection(db, "messages");
  const messageQuery = query(messagesRef, where("channelId", "==", channelId));
  const [messages, loading, error, snapshot] = useCollectionData(messageQuery);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [channelId, loading]);

  const sendMessage = async (e: any) => {
    e.preventDefault();

    if (message.length && channelId) {
      // TODO: ADD SENDER
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          content: message,
          channelId: channelId,
          timestamp: serverTimestamp(),
          user: user?.displayName,
          userImage: user?.photoURL,
        });
        console.log("Document written with ID: ", docRef.id);
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        setMessage("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <div className="flex flex-col justify-between border flex-1 h-full p-4 ">
      {channelId && (
        <>
          <div className="flex flex-col-reverse mb-4 border flex-1 overflow-hidden hover:overflow-y-scroll">
            <div className="" ref={lastMessageRef}></div>
            {messages &&
              messages.map((message, index) => (
                <Message
                  senderName={message.user}
                  timestamp={message.timestamp}
                  message={message.content}
                  userImage={message.userImage}
                  key={index}
                />
              ))}
          </div>

          <form
            className="flex w-4/5 h-12 border mx-auto"
            onSubmit={sendMessage}
          >
            <input
              className="w-full h-full p-4 border border-gray-500 focus:outline-none focus:ring-2 ring-purple-800"
              type="text"
              placeholder="Start writing"
              value={message}
              onChange={(e) =>
                e.target.value.length && setMessage(e.target.value)
              }
            />
            <button
              className="bg-purple-800 w-1/12 text-white cursor-pointer hover:bg-purple-700 focus:bg-purple-700"
              type="submit"
              onClick={sendMessage}
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatArea;
