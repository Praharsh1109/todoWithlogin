import React, { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function signupButton() {
   
try {
      // Send registration data to backend
      const response = await axios.post("http://localhost:8080/data/insert", {
        username: username,
        password: password,
        firstname: name,
      });

      // Handle response from backend if needed
      console.log(response.data);

      // Clear input fields after successful registration
      setName("");
      setusername("");
      setpassword("");
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle registration error, e.g., show an error message to the user
    }
  }
  

  return (
    <div>
      <label className="font-bold">Registration form</label>
      <br />
      <input
        placeholder="First Name"
        name="firstname"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <input
        placeholder="Username"
        name="username"
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <br />
      <input
        placeholder="Password"
        name="password"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      <br />
      <button onClick={signupButton}>Sign Up</button>
    </div>
  );
}

export default RegistrationForm;







