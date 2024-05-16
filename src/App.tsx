import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { SignupForm } from "./components/login/login";
import Showcase from "./components/Showcase/Showcase";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <div className="container py-20">
        <Title
          types="showcase, normal_headline"
          header="line"
          headline="Headline"
          subHeadline="SubHeadline"
          link="/catalog"
        />
      </div>
      <Routes>
        <Route element={<Showcase />} path="*" />
      </Routes>
    </>
  );
}

export default App;
