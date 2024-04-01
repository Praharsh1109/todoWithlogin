import React, { useState } from "react";
import axios from "axios";

function Signin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function signinbtn() {
    try {
      const response = await axios.post("http://localhost:8080/data/login", {
        username: username,
        password: password,
      });

      console.log(response.data); // Handle the response from the server
      setusername("");
      setpassword("");
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
       <div className=" max-w-md w-full bg-white rounded p-6 shadow-md">
       <h2 className=" text-xs  font-extrabold mb-4">Registration Form</h2>
      <input
        placeholder="Username"
        onChange={(e) => setusername(e.target.value)}
        className="border rounded-md p-2 mt-2 w-64"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
        className="border rounded-md p-2 mt-2 w-64"
      />
      <button
        onClick={signinbtn}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-600"
      >
        Sign In
      </button>
       </div>
     
    </div>
  );
}

export default Signin;
