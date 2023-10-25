import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp.jsx";
import Place from "./pages/Place";
import Hobby from "./pages/Hobby";
import MapScreen from "./pages/MapScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/place" element={<Place />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/map" element={<MapScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
