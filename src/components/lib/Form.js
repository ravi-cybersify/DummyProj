import React, { useState } from "react";
import Button from "./Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/userSlices";

const Form = () => {
  const location = useLocation();
  const endPath = location.pathname.split("/").pop();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // for(let i in user){
    //     console.log(user[i] ,"ele")
    // }
    if (endPath === "register") {
      localStorage.setItem("user", JSON.stringify(user));
    }

    if (endPath === "login") {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      if (
        user.username === userInfo.username &&
        user.password === userInfo.password
      ) {
       
        dispatch(getUser({user}));
        navigate("/");
      }
    }

    setUser((prevState) => ({
      ...prevState,
      username: "",
      password: "",
      phone: "",
      email: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4 mt-10">
      <div className="flex flex-col gap-1">
        <label htmlFor="userName" className="text-left font-semibold pl-1">
          Username:{" "}
        </label>
        <input
          value={user.username}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              username: e.target.value,
            }))
          }
          className="rounded-3xl px-4 py-1"
        />
      </div>
      {endPath === "register" && (
        <>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-left font-semibold pl-1">
              Email:{" "}
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              className="rounded-3xl px-4 py-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-left font-semibold pl-1">
              Phone:{" "}
            </label>
            <input
              type="tel"
              value={user.phone}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
              className="rounded-3xl px-4 py-1"
            />
          </div>
        </>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-left font-semibold pl-1">
          Password:{" "}
        </label>
        <input
          type="password"
          value={user.password}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          className="rounded-3xl px-4 py-1"
        />
        <p className="text-right text-blue-600 cursor-pointer">
          Forget password?
        </p>
      </div>
      <Button
        name={endPath === "register" ? "Signup" : "Login"}
        navClassName="bg-[#00aeef] text-white w-full text-md font-semibold mt-2 px-2 py-1 rounded-3xl tracking-wide"
      />
    </form>
  );
};

export default Form;
