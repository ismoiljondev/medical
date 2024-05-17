import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupForm } from "./components/Register/Register";

function App() {
  return (
    <Routes>
      <Route element={<SignupForm />} path="*" />
    </Routes>
  );
}

export default App;
