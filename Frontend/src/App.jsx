
import React from "react";
import  { BrowserRouter, Route, Routes } from "react-router-dom"
import RegistrationForm from "../Components/RegistrationForm";
import Signin from "../Components/Signin";
import Todos from "../Components/Todos";

function App() {
  

  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
    </BrowserRouter>

  </div>;
}

export default App;
