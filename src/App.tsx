import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Advice } from "./components/Advice/Advice";

function App() {
  return (
    <Routes>
      <Route element={<Advice></Advice>} path="*"></Route>
    </Routes>
  );
}

export default App;
