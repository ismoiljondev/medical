import { Route, Routes } from "react-router-dom";
import { Meet } from "@/components/Meet/Meet"
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Meet></Meet>} path="*"></Route>
    </Routes>
  );
}

export default App;
