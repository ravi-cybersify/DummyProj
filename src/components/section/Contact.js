import React, { useState } from "react";
import Button from "../lib/Button";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault();

  }
  return (
    <div className="flex justify-evenly items-center">
      <div className="rounded">
        <img
          src="./images/contactUs.avif"
          alt="security"
          srcSet=""
          className="rounded-2xl h-[600px]"
        />
      </div>

      <div className="rounded-3xl w-[600px] bg-gray-200 px-12 pt-5 pb-8">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser(prev=>({
              ...prev,
              name: e.target.value
            }))}
            placeholder="Name..."
            className="px-3 py-1 rounded-3xl w-full"
          />
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser(prev=>({
              ...prev,
              email:e.target.value
            }))}
            placeholder="Email..."
            className="px-3 py-1 rounded-3xl w-full"
          />
          <input
            type="text"
            value={user.subject}
            onChange={(e) => setUser(prev=>({
              ...prev,
              subject:e.target.value
            }))}
            placeholder="subject..."
            className="px-3 py-1 rounded-3xl w-full"
          />
          <textarea
            id="textarea"
            value={user.message}
            onChange={(e) => setUser(prev=>({
              ...prev,
              message:e.target.value
            }))}
            placeholder="Your message..."
            className="px-3 py-4 rounded-3xl w-full h-40"
          />
          <Button
            name="Send"
            navClassName="bg-[#00aeef] text-white w-full text-md font-semibold mt-2 px-2 py-1 rounded-3xl tracking-wide"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
