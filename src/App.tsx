import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
  return (
    <Routes>
      <Route element={<Statistics></Statistics>} path="*"></Route>
    </Routes>
  );
}

export default App;
