import React, { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function signupButton() {
    try {
      // Send registration data to backend
      const response = await axios.post("http://localhost:8080/data/insert", {
        username: username,
        password: password,
        firstname: name,
      });

      // Handle response from backend
      console.log(response.data);

      // Clear input fields after successful registration
      setName("");
      setUsername("");
      setPassword("");
      
      // Set success message
      setSuccessMessage("Data recorded");
      setErrorMessage(""); // Clear any previous error message

    } catch (error) {
      console.error("Error during registration:", error);

      // Set error message
      setErrorMessage("You entered wrong data");
      setSuccessMessage(""); // Clear any previous success message
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white rounded p-6 shadow-md">
        <h2 className=" text-xl  font-extrabold mb-4">Registration Form</h2>
        
        <input
          placeholder="First Name"
          name="firstname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2 mt-2 w-full "
        />
        <input
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-md p-2 mt-2 w-full"
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md p-2 mt-2 w-full"
        />
        <button
          onClick={signupButton}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 w-full hover:bg-blue-600"
        >
          Sign Up
        </button>
        {successMessage && <div className="text-green-500 mb-2">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default RegistrationForm;
