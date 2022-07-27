import { DotsCircleHorizontalIcon, PlusCircleIcon } from "@heroicons/react/outline"
import { useState, Image, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { onSnapshot, query, collection, where, snapshot, addDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import addFriend from "../atoms/FriendModal";
import globalUserID from "../atoms/userID";
import {useRecoilState} from "recoil"


function Header() {
    const [friendModal, setFriendModal] = useRecoilState(addFriend);
    const [GlobalUserID, setGlobalUserID] = useRecoilState(globalUserID);
    const [size, setSize] = useState(true);
    const { data: session } = useSession();
    const [userID, setUserID] = useState("default");
    const [friends, setFriends] = useState([]);

    function ChangeSideBar() {
        if(size==true) {
            setSize(false);
            console.log("Changed")
        } else {
            setSize(true);
            console.log("Changed")
        }
    }

    async function addUser() {
        if(session) {
            await addDoc(collection(db, "users"), {
                email: session?.user?.email,
                name: session?.user?.name,
                image: session?.user?.image
            })
            await getID();
    }}

    async function checkAccount() {
        if(session) {
            console.log("Check Account")
            onSnapshot(
                query(collection(db, "users"), where("email", "==", session?.user?.email)),
                (snapshot) => {
                    if(snapshot.empty) {
                        addUser();
                    } else {
                        const id = snapshot.docs[0].id;
                        setUserID(id);
                        setGlobalUserID(id);
                    };
                    
            })}
    }

    async function getID() {
        onSnapshot(
            query(collection(db, "users"), where("email", "==", session?.user?.email)),
            (snapshot) => {
                let id = snapshot.docs[0].id;
                setUserID(id);
                setGlobalUserID(id);
            })
    }

    useEffect(() => {
        checkAccount();
        }
        , [session]);

    useEffect(
        () => onSnapshot(
            query(
                collection(db, "users", userID, "friends")), 
                snapshot => setFriends(snapshot.docs)
                ), [db, userID]);



    return (
        <div className={`flex flex-col bg-gray-400 px-3  text-center items-center py-2 shadow-lg space-y-5 ${size ? "w-40" : "w-20"}`}>
            <DotsCircleHorizontalIcon className={`absolute h-6  cursor-pointer ${size ? "left-40" : "left-20"}`} onClick={() => ChangeSideBar()}/>
            {!session && 
            <h1 className="mb-5 cursor-pointer" onClick={signIn}>Login</h1>
            }
            {session && 
            <h1 className="mb-5 cursor-pointer" onClick={signOut}>Log Out</h1>
            }
            <div className="flex justify-between space-x-2 items-center cursor-pointer">
                <img className={`bg-blue-500 rounded-full ${size ? "h-10" : "h-20"}`} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
                <h1 className={`${size ? "" : "hidden"}`}>Louis Breton</h1>
            </div>
            <PlusCircleIcon className="h-10 cursor-pointer" onClick={() => {setFriendModal(true)}} />

        </div>
    );
}

export default Header;