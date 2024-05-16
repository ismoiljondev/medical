import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { SignupForm } from "./components/login/login";
import Showcase from "./components/Showcase/Showcase";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      {/* <Title
        types="showcase" // add 'normal-headline' if u want default font size, not big for showcase
        header="line" // type 'line' for line or text that will be displayed
        headline="text"
        subHeadline="text"
      /> */}
      <Routes>
        <Route element={<Showcase />} path="*" />
      </Routes>
    </>
  );
}

export default App;
