import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp.jsx";
import Place from "./pages/Place";
// import Hobby from "./pages/Hobby";
import MapScreen from "./pages/MapScreen";
import Header from "./components/Header";
import DetailDevelop from "./pages/DetailDevelop";
import DetailHobby from "./pages/DetailHobby";
import DetailedInformation from "./pages/DetailedInformation";
import ProfileSettings from "./pages/ProfileSettings";
import AgreePage from "./pages/AgreePage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/place" element={<Place />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/develop" element={<DetailDevelop />} />
        <Route path="/hobby" element={<DetailHobby />} />
        <Route path="/inform/:id" element={<DetailedInformation />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/agree" element={<AgreePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
