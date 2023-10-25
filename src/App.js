import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header";
import DetailDevelop from "./pages/DetailDevelop";
import DetailHobby from "./pages/DetailHobby";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/develop" element={<DetailDevelop />} />
        <Route path="/hobby" element={<DetailHobby />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
