import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants,js";

const Login = () => {
  const [emailId, setEmailId] = useState("viratkohli@gmail.com");
  const [password, setPassword] = useState("Virat@18");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    try {
      const value = await axios.post(
        BASE_URL+"/login",
        {
          emailId: emailId,
          password: password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(value.data.data));
      navigate("/");
    } catch (err) {
      console.log("ERROR: " + err.message);
    }
  };
  return (
    <div className="flex justify-center items-center my-5 p-4">
      <div className="card card-border bg-base-300 w-96 m-3">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                className="input"
                placeholder="Email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              {/* <p className="label">Optional</p> */}
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p className="label">Optional</p> */}
            </fieldset>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
