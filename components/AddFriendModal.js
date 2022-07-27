import { XCircleIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil"
import addFriend from "../atoms/FriendModal";
import globalUserID from "../atoms/userID";
import { onSnapshot, query, collection, where, snapshot, addDoc, doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

function AddFriend() {
    const [friendModal, setFriendModal] = useRecoilState(addFriend);
    const [GlobalUserID, SetGlobalUserID] = useRecoilState(globalUserID);
    const [friendCode, setFriendCode] = useState("");

    async function newFriend() {
        onSnapshot(
            query(doc(db, "users",friendCode)),
            (snapshot) => {
                if(snapshot.empty) {
                    console.log("Does not Exist")
                } else {
                    console.log(snapshot.docs);
                    setDoc(doc(db, "users", GlobalUserID, "friends", friendCode), {
                        id: friendCode
                    });
                }})
    }

    useEffect(() => {
        console.log(friendCode);
    }, [friendCode])

    return (
        <div className="absolute bg-gray-500 h-screen w-screen right-0 bg-opacity-70 bg-blur-50 backdrop-blur-sm">
            <div className="bg-white p-5 w-[33%] h-[33%] mt-[15%] ml-[33%] rounded-3xl flex flex-col items-center space-y-10">
                <XCircleIcon className="absolute h-7 text-gray-500 ml-[30%] hover:scale-110 hover:text-black cursor-pointer transition duration-200 ease-out" onClick={() => {setFriendModal(false)}} />
                <h1 className="font-bold mt-7 text-3xl">Add a Friend</h1>
                <div className="flex flex-row items-center justify-center">
                    <input placeholder="Friend Code" className="" onChange={(e) => setFriendCode(e.target.value)}></input>
                    <button className="bg-green-500 px-2 py-1 rounded-lg shadow-lg hover:scale-110 hover:bg-green-600 transition duration-200 ease-out" onClick={() => {newFriend()}}>Add Friend</button>
                </div>
                <h1 className="text-lg translate-y-4">Your Friend code is: {GlobalUserID}</h1>
            </div>
        </div>
    );
}

export default AddFriend;