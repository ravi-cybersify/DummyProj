import React, { useState } from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const endPath = location.pathname.split("/").filter(Boolean)[0];

//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState(null);
//   const [email, setEmail] = useState("");
const [user,setUser]=useState({
    username:"",
    password:"",
    phone:'',
    email:"",
})

  const handleSubmit = (e) => {
    e.preventDefault();
    // for(let i in user){
    //     console.log(user[i] ,"ele")
    // }
    setUser((prevState) => ({
        ...prevState, 
        username: '',
        password: '',
        phone: '',
        email: '',
      }))
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
        <p className="text-right text-blue-600 cursor-pointer">Forget password?</p>
      </div>
      <Button
      name =
       {
        endPath === 'register' ?  "Signup" :  "Login"
       }
        navClassName="bg-[#00aeef] text-white w-full text-md font-semibold mt-2 px-2 py-1 rounded-3xl tracking-wide"
      />
    </form>
  );
};

export default Form;
