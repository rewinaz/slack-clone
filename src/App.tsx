import ChatArea from "./components/ChatArea";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./routes/Login";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="h-screen flex w-full items-center justify-center">
        <h1 className="text-4xl">LOADING</h1>
      </div>
    );
  }

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
