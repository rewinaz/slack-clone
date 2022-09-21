interface Props {
  senderName: string;
  timestamp: any;
  message: string;
  userImage: string;
}

const Message = ({ senderName, timestamp, message, userImage }: Props) => {
  console.log(userImage);
  
  return (
    <div className="flex items-center h-14 mb-6 cursor-pointer">
      <img
        className="w-14 h-14 rounded-md object-cover mr-2"
        src={userImage}
        alt=""
      />

      <div className="">
        <div className="flex items-center">
          <h3 className="font-bold text-lg">{senderName}</h3>
          <p className="ml-4 text-sm text-gray-600">
            {new Date(timestamp?.toDate()).toUTCString()}
          </p>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
