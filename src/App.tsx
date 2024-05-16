import { Route, Routes } from "react-router-dom";
import "./App.css";
import Showcase from "./components/Showcase/Showcase";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Showcase />} path="*" />
      </Routes>
    </>
  );
}

export default App;
