import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import userImg from "../assets/user-solid(1).svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center w-full h-16 bg-purple-900">
      <div className="flex flex-1 items-center justify-between mx-4">
        <img className="w-12 h-12 text-white" src={userImg} alt="" />
        <AccessTime className="text-white" />
      </div>

      <form className="flex items-center flex-1 min-w-fit w-28 border-2 border-gray-500 rounded-lg pl-8 bg-purple-800">
        <Search className="text-white" />
        <input
          className="flex-1 focus:outline-none p-1 bg-purple-800"
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="flex-1 text-right mr-4">
        <HelpOutline className="text-white" />
      </div>
    </div>
  );
};

export default Header;
