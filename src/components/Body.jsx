import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { BASE_URL } from "../utils/constants,js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const fetchData = async() => {
    try {
      const data = await axios.get(BASE_URL + "/profile", { withCredentials: true });
      dispatch(addUser(data.data));
    } catch (err) {
      navigate("/login");
      console.error("ERROR: " + err.message);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
