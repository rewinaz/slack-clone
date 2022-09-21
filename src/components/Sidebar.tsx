import {
  Edit,
  Message,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Add,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
} from "@material-ui/icons";
import { collection } from "@firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import SidebarItem from "./SidebarItem";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const Sidebar = (props: Props) => {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));
  const [user] = useAuthState(auth);

  return (
    <div className="h-full w-60 bg-purple-900">
      <div className="flex items-center justify-between p-2 border-t-2 border-gray-600">
        <div className="h-10">
          <h1 className="text-white font-bold">{user?.displayName}</h1>
          <p className="flex items-center justify-between text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-600"></span> Rewina
            zerou
          </p>
        </div>

        <div className="h-10 w-10 flex items-center justify-center cursor-pointer bg-white rounded-full hover:bg-gray-100">
          <Edit />
        </div>
      </div>

      <div className="border-t-2 border-gray-600">
        <SidebarItem Icon={Message} title="Threads" />
        <SidebarItem Icon={Inbox} title="Mentions & Reactions" />
        <SidebarItem Icon={Drafts} title="Saved Items" />
        <SidebarItem Icon={BookmarkBorder} title="Channel Browser" />
        <SidebarItem Icon={PeopleAlt} title="People & user groups" />
        <SidebarItem Icon={Apps} title="Apps" />
        <SidebarItem Icon={FileCopy} title="File Browser" />
        <SidebarItem Icon={KeyboardArrowUp} title="Show Less" />
      </div>

      <div className="py-2 border-t-2 border-gray-600">
        <SidebarItem Icon={KeyboardArrowDown} title="Channels" />
      </div>

      <div className="border-t-2 border-gray-600">
        <SidebarItem Icon={Add} title="Add Channel" handlerType="addChannel" />
        {channels &&
          channels?.docs.map((doc) => (
            <SidebarItem
              handlerType="selectChannel"
              title={doc.data().name}
              key={doc.id}
              id={doc.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
