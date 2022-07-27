import Message from "./Message"
import { useRecoilState } from "recoil";
import addFriend from "../atoms/FriendModal";
import {PlusCircleIcon} from "@heroicons/react/outline"
import FriendModal from "./AddFriendModal"

function Chat() {
    const [friendModal, setFriendModal] = useRecoilState(addFriend);

    return (
        <div className="flex flex-col-reverse pl-20 w-screen pr-20 space-y-10">
            {friendModal &&
                <FriendModal />
            }
            <div className="flex items-center justify-center">
                <input placeholder="Write a Message..." className="border-2 px-3 py-2 rounded-full w-[50%] mb-3"></input>
            </div>
            <Message sent={true} />
            <Message sent={false} />
        </div>
    );
}

export default Chat;