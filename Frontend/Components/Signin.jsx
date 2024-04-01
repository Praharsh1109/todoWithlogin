import React, { useState } from "react";
import axios from "axios";

function Signin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function signinbtn() {
    try {
      const response = await axios.post("http://localhost:8080/data/login", {
        username:username,
        password:password
      });

      console.log(response.data); // Handle the response from the server
      setusername("")
      setpassword("")
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <div>
      <input
        placeholder="username"
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <br />
      <input
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      <br />
      <button onClick={signinbtn}>signin</button>
    </div>
  );
}

export default Signin;
