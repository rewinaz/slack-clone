import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { enterRoom } from "../slice/appSlice";
import { useAppDispatch } from "../reduxHooks";

type Props = {
  Icon?: any;
  title: string;
  handlerType?: "addChannel" | "selectChannel";
  id?: string;
};

const SidebarItem = ({ Icon, title, handlerType, id }: Props) => {
  const dispatch = useAppDispatch();
  const createChannelHandler = async (): Promise<Function | undefined> => {
    const channelName = prompt("Enter Channel Name");
    if (!channelName) return createChannelHandler();

    // Create channel on firebase
    try {
      const docRef = await addDoc(collection(db, "rooms"), {
        name: channelName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const selectChannelHandler = () => {
    if (id) dispatch(enterRoom({ roomId: id }));
  };

  const onClickHandler = () => {
    if (handlerType == "addChannel") createChannelHandler();
    else selectChannelHandler();
  };
  return (
    <div
      className="flex items-center w-full p-2 cursor-pointer text-white text-sm hover:opacity-80 hover:bg-purple-800"
      onClick={onClickHandler}
    >
      {Icon ? <Icon style={{ fontSize: "1rem" }} /> : "#"}
      <div className="ml-2">{title}</div>
    </div>
  );
};

export default SidebarItem;
