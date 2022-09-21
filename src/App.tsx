import ChatArea from "./components/ChatArea";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import Login from "./routes/Login";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="h-screen flex flex-col">
      {user ? (
        <>
          <Header photoUrl={user.photoURL!} displayName={user.displayName!} />
          <div className="flex h-full overflow-hidden">
            <Sidebar />
            <ChatArea />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
