import Message from "./Message";
import { useRecoilState } from "recoil";
import addFriend from "../atoms/FriendModal";
import { PlusCircleIcon } from "@heroicons/react/outline";
import FriendModal from "./AddFriendModal";
import colorTheme from "../atoms/colorModeAtom";

function Chat() {
  const [friendModal, setFriendModal] = useRecoilState(addFriend);
  const [colorMode, setColorMode] = useRecoilState(colorTheme);

  return (
    <div className={`${colorMode ? "bg-[#393E46]" : "bg-white"} flex flex-col-reverse pl-20 w-screen pr-20 space-y-10`}>
      {friendModal && <FriendModal />}
      <div className="flex items-center justify-center">
        <input
          placeholder="Write a Message..."
          className="border-2 px-3 py-2 rounded-full w-[50%] mb-3"
        ></input>
      </div>
      <Message sent={true} />
      <Message sent={false} />
    </div>
  );
}

export default Chat;
