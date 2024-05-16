import { Route, Routes } from "react-router-dom";
import "./App.css";
import Showcase from "./components/Showcase/Showcase";
// import { SignupForm } from "./components/Register/login";

function App() {
  return (
    <Routes>
      {/* <Route element={<SignupForm />} path="*" /> */}
      <Route element={<Showcase />} path="*" />
    </Routes>
  );
}

export default App;
