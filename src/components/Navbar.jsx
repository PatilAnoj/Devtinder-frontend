import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants,js";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogout=()=>{
    try{
      axios.post(BASE_URL+"/logout",{},{withCredentials:true});
      dispatch(removeUser());
      navigate("/login");
    }catch(err){
      console.log("ERROR: "+ err.message)
    }
  }

  const user=useSelector((store)=>store.user);
  return user && (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <button className="btn btn-ghost text-xl" onClick={()=>navigate("/")}>DevTinder</button>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user photo"
                src={user.photoUrl}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button className="justify-between" onClick={()=>navigate("/profile")}>
                Profile
                <span className="badge">New</span>
              </button>
            </li>
            <li>
              <button>Settings</button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
