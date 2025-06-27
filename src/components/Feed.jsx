import { useDispatch, useSelector } from "react-redux"
import UserCard from "./userCard"
import { BASE_URL } from "../utils/constants,js"
import { useEffect } from "react";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";


const Feed = () => {
    const dispatch=useDispatch();
    const getFeed=async()=>{
        try{
            const feed= await axios.get(BASE_URL+"/user/feed",{withCredentials:true});
            dispatch(addFeed(feed.data.data));
        }catch(err){
            console.log("ERROR: "+ err.message)
        }
    }
    useEffect(()=>{
        getFeed();
    },[])
    const userFeed=useSelector(store=>store.feed);
  return userFeed && (
    <div className="my-5 flex justify-center flex-wrap">
        {
            userFeed.map((card)=>
                <div key={card._id} className="m-2">
                    <UserCard user={card}/>
                </div>
            
            )
        }
    </div>
  )
}

export default Feed